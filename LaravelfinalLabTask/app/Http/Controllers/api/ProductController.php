<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    //
    public function index(){
        /*$product = Product::all();

        return response()->json([
            'status' => 200,
            'products' => $product,
        ]);*/
        /*$product = Product::all();
        //return $product;
        return response()->json([
            'status' => 200,
            'products' => $product,
        ]);*/
        //return response()->json($product);
        $product = DB::select("select * from product");
        return response()->json([
            'status' => 200,
            'products' => $product,
        ]);
    }
}
