import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import axios from "axios";

const Registration = ({}) => {

    const history = useHistory();

    var addEmployeeArray = {
        name: "",
        contact: "",
        userName: "",
        password: "",
    }

    async function addEmployeeSubmit(e){
        e.preventDefault();

        addEmployeeArray.name = e.target.name.value;
        addEmployeeArray.contact = e.target.contact.value;
        addEmployeeArray.userName = e.target.userName.value;
        addEmployeeArray.password = e.target.password.value;

        //alert("fd\n"+e.target.name.value+"\n"+addEmployeeArray.name);
        const resp = await axios.post("http://localhost:8000/api/insertEmployee", addEmployeeArray);
        if(resp.data.status === 200){
            alert("Employee added successfully!");
            console.log("data..."+resp.data.empName);

            history.push("/AdminHome");
        }
        //history.push("/AdminHome");
    }

    return(
        <div>
            <Router>
                <Switch>
                    <form onSubmit={addEmployeeSubmit}>
                        <table>
                            <tbody>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input type="text" name="name"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Contact</td>
                                <td>
                                    <input type="text" name="contact"/>
                                </td>
                            </tr>
                            <tr>
                                <td>UserName</td>
                                <td>
                                    <input type="text" name="userName"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td>
                                    <input type="password" name="password"/>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="submit" value="Register"/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </Switch>
            </Router>
        </div>
    )
}

export default Registration;