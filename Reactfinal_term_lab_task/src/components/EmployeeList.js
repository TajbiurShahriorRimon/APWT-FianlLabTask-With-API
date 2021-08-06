import React, {Component, useEffect} from 'react';
import axios from "axios"; //install axios
import {useHistory, withRouter, Route} from "react-router-dom";
import Cors from 'cors';

class EmployeeList extends Component{
    state = {
        employees: [],
        loading: true,
    }

    async componentDidMount() {
        const resp = await axios.get('http://localhost:8000/api/getAllEmployees');
        console.log(resp.data);

        if (resp.data.status === 200){
            this.setState({
                employees: resp.data.employees,
                loading: false,
            })
        }
    }

    /*useEffect(async()=>
        await axios.get('/api/getAllProducts').then(response => {
            setData(response.data.reverse())
            localStorage.setItem("token", JSON.stringify(response.data));
        }),[]
    );*/

    deleteEmployee = async (e, id) =>{
        e.preventDefault();
        const resp = await axios.delete(`http://localhost:8000/api/deleteEmployee/${id}`);
        //alert("fs\n"+e.target.id+"\nfds\n"+id);
        if(resp.data.status === 200){
            alert("Employee Deleted Successfully");
            //this.props.history.push("/AdminHome");
            window.location.replace("/AdminHome");
        }
    }

    render() {
        var employeeTable = "";

        if(this.state.loading){
            employeeTable = <tr><td>Loading...</td></tr>
        }
        else {
            employeeTable = this.state.employees.map((item) => {
                return(
                    <tr key={item.userId}>
                        <td>{item.userId}</td>
                        <td>{item.name}</td>
                        <td>{item.userName}</td>
                        <td>{item.contact}</td>
                        <td>
                            <button type="button" onClick={(e) => this.deleteEmployee(e, item.userId)}>Delete</button>
                        </td>
                    </tr>
                )
            })
        }

        return(
            <div className="card-body" align="center">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Employee Name</th>
                        <th>UserName</th>
                        <th>Contact No.</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {employeeTable}
                    </tbody>
                </table>
            </div>
        )
    }
    /*render() {
        return(
            <h2>Hello</h2>
        )
    }*/
}

export default EmployeeList;