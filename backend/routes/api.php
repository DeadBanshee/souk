<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CartController;

Route::get('/test', function () {
    return response()->json(['message' => 'API is working']);
});


//PRODUCT MANAGEMENT ROUTES
Route::get('/products', [ProductController::class, 'index']);

Route::post('/products', [ProductController::class, 'store']);

Route::get('/products/{id}', [ProductController::class, 'fetchProduct']);

Route::post('/products/search', [ProductController::class, 'search']);

Route::get('/products/category/{category}', [ProductController::class, 'fetchProductsByCategory']);

Route::get('/fetchCategories', [ProductController::class, 'fetchCategories']);

//AUTHENTICATION ROUTES
Route::post('/login', [UserController::class, 'login']);

Route::post('/signUp', [UserController::class, 'store']);

//PROTECTED ROUTES 
Route::middleware('auth:api')->group(function () {
    Route::get('/user', [UserController::class, 'me']);
    Route::post('/logout', [UserController::class, 'logout']);

    
    Route::post('/addToCart', [CartController::class, 'addToCart']);
    Route::get('/fetchCart', [CartController::class, 'fetchCart']);
    Route::delete('/removeFromCart/{id}', [CartController::class, 'removeFromCart']);
});