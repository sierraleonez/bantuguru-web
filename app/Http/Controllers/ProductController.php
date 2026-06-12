<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $products = Product::where('is_active', true)->get();

        if ($request->wantsJson()) {
            return response()->json($products);
        }

        return Inertia::render('Products', [
            'products' => $products,
        ]);
    }

    public function home()
    {
        $products = Product::where('is_active', true)->take(4)->get();

        return Inertia::render('Home', [
            'products' => $products,
        ]);
    }
}
