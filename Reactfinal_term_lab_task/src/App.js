import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProductList from "./components/ProductList";
import LogIn from "./components/Login";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Registration from "./components/Registration";
import AdminHomePage from "./components/AdminHome";
import LoginNavbar from "./components/LoginNavbar";
import RegistrationLink from "./components/RegistrationLink";
import AddProduct from "./components/AddProduct";
import { useState } from "react";
import EmployeeHome from "./components/EmployeeHome";
import EmployeeList from "./components/EmployeeList";

function App() {

    const [loginResult, setLoginResult] = useState(false);

  return (
      <div>
          <Router>
              <Switch>
                  <Route exact path="/">
                      <div>
                          <LogIn/>
                      </div>
                  </Route>
                  <Route path="/AdminHome">
                      <div><AdminHomePage/></div>
                  </Route>
                  <Route path="/registerEmployee">
                      <div><Registration/></div>
                  </Route>
                  <Route path="/EmployeeHome">
                      <div><EmployeeHome/></div>
                  </Route>
                  <Route path="/AddProduct">
                      <div><AddProduct/></div>
                  </Route>
                  <Route path="/getProducts">
                      <div><ProductList/></div>
                  </Route>
                  <Route path="/getAllEmployees">
                      <div><EmployeeList/></div>
                  </Route>
              </Switch>
          </Router>
      </div>
  );
}

export default App;
