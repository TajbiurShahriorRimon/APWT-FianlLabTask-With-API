import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Registration from "./Registration";
import {useHistory} from "react-router-dom";
import {useState} from "react";


const EmployeeHome = ({}) =>{

    return (
        <div>
            <h2>Employee Home Page</h2>
            <div>
                <Link to="/AddProduct">Add Product</Link>
            </div>
        </div>
    )
}

//render(<AdminHomePage/>, document.getElementById('root'));

export default EmployeeHome;