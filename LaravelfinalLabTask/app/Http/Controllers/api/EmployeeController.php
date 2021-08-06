<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Employee;

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

    function insert(Request $request){
        $emp = DB::insert("insert into user (name, contact, userName, password) values
                            ('$request->name', '$request->contact', '$request->userName', '$request->password')");

        $empName = $request->name;
        return response()->json(["status" => 200, "employee" => $empName]);
    }

    function find($id){
        $employee = DB::select("select * from user where userId = $id");
        return response()->json([
            "status" => 200,
            "employee" => $employee
        ]);
    }

    function updateEmployee(Request $request, $id){
        $empId = (int)$id;
        /*$emp = DB::update("update user set name = $request->name, contact = $request->contact,
                        userName = $request->userName, password = $request->password where userId = $empId");*/
        DB::update("update user set name = '$request->name', contact = '$request->contact',
                        userName = '$request->userName', password = '$request->password' where userId = $empId");

        $emp_name = $request->userName;
        $emp_contact = $request->contact;
        $emp_userName = $request->userName;
        $emp_pass = $request->password;
        return response()->json([
            "status" => 200,
            "emp" => $emp_name,
            "empUser" => $emp_userName,
            "empContact" => $emp_contact,
            "empPass" => $emp_pass,
            "empId" => $empId
        ]);
    }
}
