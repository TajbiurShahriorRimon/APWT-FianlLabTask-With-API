<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    //
    function index(){
        $employee = DB::select("select * from user");
        return response()->json([
            "status" => 200,
            "employees" => $employee
        ]);
    }

    function destroy($id){
        $employee = DB::select("Delete from user where userId = $id");
        return response()->json([
            "status" => 200
        ]);
    }
}
