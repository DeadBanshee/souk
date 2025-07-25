<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductImage;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function store(Request $request)
    {
        // Validação com mensagens claras
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'images.*' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        // Cria o produto
        $product = Product::create([
            'name' => $validated['name'],
            'price' => $validated['price'],
        ]);

        // Salva imagens, se houver
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('products', 'public');

                ProductImage::create([
                    'product_id' => $product->id,
                    'path' => $path,
                ]);
            }
        }

        // Retorna com imagens
        return response()->json($product->load('images'), 201);
    }

    public function index()
    {
        $products = Product::with('images')->get();

        return response()->json($products, 200);
    }

    public function fetchProduct($id)
    {
        $product = Product::with('images')->find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json($product, 200);
    }

    public function search(Request $request)
    {
        $query = $request->input('query');

        $products = Product::where('name', 'like', "%{$query}%")
            ->orderBy('name')
            ->offset(0)->limit(6)
            ->get();

        return response()->json($products);
    }

    public function fetchCategories(Request $request){

        $categories = Category::all();

        return response()->json($categories);
    }

    public function fetchProductsByCategory($category)
    {
        $products = Product::where('category_id', $category)->with('images')->get();

        return response()->json($products, 200);
    }

}
