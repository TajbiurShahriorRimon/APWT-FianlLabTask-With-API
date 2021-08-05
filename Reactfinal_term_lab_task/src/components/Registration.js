import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const Registration = ({}) => {

    return(
        <div>
            <Router>
                <Switch>
                    <form action="">
                        <table>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Contact</td>
                                <td>
                                    <input type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td>UserName</td>
                                <td>
                                    <input type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td>
                                    <input type="password"/>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="submit" value="Register"/>
                                </td>
                            </tr>
                        </table>
                    </form>
                </Switch>
            </Router>
        </div>
    )
}

export default Registration;