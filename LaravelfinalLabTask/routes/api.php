<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

//Route::get('/getAllProducts', [\App\Http\Controllers\ProductController::class, 'index']);
Route::get('/getAllProducts', [\App\Http\Controllers\api\ProductController::class, 'index']);
Route::get('/getAllEmployees', [\App\Http\Controllers\api\EmployeeController::class, 'index']);
Route::delete('/deleteEmployee/{id}', [\App\Http\Controllers\api\EmployeeController::class, 'destroy']);
Route::post("/insertEmployee", [\App\Http\Controllers\api\EmployeeController::class, 'insert']);
Route::get("/findEmployee/{id}", [\App\Http\Controllers\api\EmployeeController::class, 'find']);
Route::put("/updateEmployee/{id}", [\App\Http\Controllers\api\EmployeeController::class, 'updateEmployee']);

