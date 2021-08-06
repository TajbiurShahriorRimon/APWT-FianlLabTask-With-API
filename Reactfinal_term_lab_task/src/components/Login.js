import React, {Component} from 'react';
import LoginNavbar from "./LoginNavbar";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AdminHomePage from "./AdminHome";
import { useHistory } from "react-router-dom";

const LogIn = ({}) => {
    const history = useHistory();

    function redirect() {
        alert("fd");
        history.push("/AdminHome");
    }

    return(
        <div>
            <div>
                <Link to="/AdminHome">Admin Home</Link> | |
                <Link to="/EmployeeHome">Employee Home</Link>
            </div>
            <h2>Login</h2>
            <Router>
                <LoginNavbar/>
                <div>
                    <Route path="/AdminHome">
                        <div>
                            <AdminHomePage status="true"/>
                        </div>
                    </Route>
                </div>
            </Router>
            <div>
            <form action="">
                <table>
                    <tbody>
                    <tr>
                        <td>UserName</td>
                        <td>
                            <input type="text"/>
                        </td>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type="password"/>
                        </td>
                    </tr>
                    </tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="submit" value="Login"/>
                        </td>
                    </tr>
                </table>
            </form>
            </div>
        </div>
    )
}

export default LogIn;