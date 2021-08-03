import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProductList from "./components/ProductList";
import LogIn from "./components/Login";
import {BrowserRouter as Router} from "react-router-dom";
import Registration from "./components/Registration";
import AdminHomePage from "./components/AdminHome";

function App() {

  return (
    <div className="App">
        <a href="./components/AdminHome.js">Admin</a>
        <h1 className="App-link">Log IN</h1>
        <LogIn/>
        <ProductList />
        <Registration/>

    </div>
  );
}

export default App;
