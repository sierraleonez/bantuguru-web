<?php

use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Models\Product;
use Illuminate\Support\Facades\Route;

Route::get('/', [ProductController::class, 'home'])->name('home');
Route::get('/products', [ProductController::class, 'index'])->name('products');

Route::get('/checkout', function () {
    return \Inertia\Inertia::render('Checkout', [
        'allProducts' => Product::where('is_active', true)->get(),
        'order' => null,
    ]);
})->name('checkout.form');

Route::post('/checkout', [OrderController::class, 'store'])->name('checkout.store');
Route::get('/checkout/{invoice_number}', [OrderController::class, 'show'])->name('checkout.show');
