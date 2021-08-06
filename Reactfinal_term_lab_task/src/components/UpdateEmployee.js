import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import { withRouter } from "react-router";
import axios from "axios";

/*const UpdateEmployee = ({}) => {

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
}*/

class UpdateEmployee extends Component{
    state = {
        name: "",
        contact: "",
        userName: "",
        password: "",
    }


    handleFormInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount() {
        var id = this.props.match.params.id; //parameter from url
        alert("emp_id\n"+id);

        const resp = await axios.get(`http://localhost:8000/api/findEmployee/${id}`);
        console.log(resp.data);
        if(resp.data.status === 200){
            alert("found\n"+resp.data.employee[0].name);
            this.setState({
                name: resp.data.employee[0].name,
                contact: resp.data.employee[0].contact,
                userName: resp.data.employee[0].userName,
                password: resp.data.employee[0].password,
            })
        }
    }

    updateEmployee = async (e) => {
        e.preventDefault();
        var id = this.props.match.params.id; //parameter from url

        const resp = await axios.put(`http://localhost:8000/api/updateEmployee/${id}`, this.state);
        if (resp.data.status === 200){
            alert("Employee Updated Successfully");
            window.location.replace("/AdminHome");
        }

    }

    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        <form onSubmit={this.updateEmployee}>
                            <table>
                                <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>
                                        <input type="text" name="name" onChange={this.handleFormInput} value={this.state.name}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Contact</td>
                                    <td>
                                        <input type="text" name="contact" onChange={this.handleFormInput} value={this.state.contact}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>UserName</td>
                                    <td>
                                        <input type="text" name="userName" onChange={this.handleFormInput} value={this.state.userName}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Password</td>
                                    <td>
                                        <input type="password" name="password" onChange={this.handleFormInput} value={this.state.password}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="submit" value="Update"/>
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
}
export default withRouter(UpdateEmployee);

/*
//export default UpdateEmployee;*/
