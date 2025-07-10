<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;

class CartController extends Controller
{
    public function addToCart(Request $request)
    {
        $validated = $request->validate([
            'product_id' => 'required|integer|exists:products,id',
        ]);

        $validated['user_id'] = auth()->id();

        $cartItem = Cart::create($validated);

        return response()->json($cartItem, 201);
    }

    public function fetchCart(Request $request)
    {
        $userId = auth()->id();

        $cartItems = Cart::where('user_id', $userId)
        ->with(['product.images'])
        ->get();

        $total = $cartItems->sum(function ($item) {
            return $item->product->price ?? 0;
        });

        return response()->json([
            'cart' => $cartItems,
            'totalPrice' => $total,
        ]);
    }

    public function removeFromCart($id)
    {
        $cartItem = Cart::find($id);

        if (!$cartItem) {
            return response()->json(['message' => 'Cart item not found'], 404);
        }

        $cartItem->delete();

        return response()->json(['message' => 'Cart item removed successfully'], 200);
    }
}
