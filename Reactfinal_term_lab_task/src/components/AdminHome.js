import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Registration from "./Registration";
import {useHistory} from "react-router-dom";
import RegistrationLink from "./RegistrationLink";
import {render} from "@testing-library/react";
import App from "../App";
import {useState} from "react";
import ProductList from "./ProductList";
import EmployeeList from "./EmployeeList";


const AdminHomePage = ({status}) =>{
    const [pageLoaded, setPageLoad] = useState(false);
    const history = useHistory();

    function test() {
        alert("hello");
        history.push("/registerEmployee");
    }
        return (
            <div>
                <h2>Admin Home Page</h2>
                <div>
                    <Link to="/registerEmployee">Create Employee</Link>
                </div>

                <div align="center">
                    <form action="">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="text" placeholder="Type Anything..."/>
                                        <input type="submit" value="Search"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>

                <div align="center">
                    <EmployeeList/>
                </div>
            </div>
        )
        //}
    /*}else {
        return null;
    }*/
}

//render(<AdminHomePage/>, document.getElementById('root'));

export default AdminHomePage;