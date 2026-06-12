<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'whatsapp_number' => 'required|string|max:20',
            'items' => 'required|array|min:1',
            'items.*.id' => 'required|exists:products,id',
        ]);

        $products = Product::whereIn('id', collect($validated['items'])->pluck('id'))->get();
        $totalAmount = $products->sum('price');

        $order = DB::transaction(function () use ($validated, $products, $totalAmount) {
            $invoiceNumber = 'BTG-' . now()->format('ymd') . '-' . str_pad(random_int(1, 9999), 4, '0', STR_PAD_LEFT);

            $order = Order::create([
                'invoice_number' => $invoiceNumber,
                'whatsapp_number' => $validated['whatsapp_number'],
                'total_amount' => $totalAmount,
                'status' => 'PENDING',
            ]);

            foreach ($products as $product) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $product->id,
                    'snap_price' => $product->price,
                ]);
            }

            return $order;
        });

        if ($request->wantsJson()) {
            return response()->json($order->load('items'));
        }

        return Inertia::render('Checkout', [
            'order' => $order->load('items'),
            'adminPhone' => config('app.whatsapp_admin_number'),
        ]);
    }

    public function show($invoiceNumber)
    {
        $order = Order::with('items')->where('invoice_number', $invoiceNumber)->firstOrFail();

        return Inertia::render('Checkout', [
            'order' => $order,
            'adminPhone' => config('app.whatsapp_admin_number'),
        ]);
    }
}
