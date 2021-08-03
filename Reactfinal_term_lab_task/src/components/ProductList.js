import React, {Component} from 'react';
import axios from "axios"; //install axios
import Cors from 'cors';

class ProductList extends Component{

    state = {
        students: [],
        loading: true,
    }

    async componentDidMount() {
        const resp = await axios.get('http://localhost:8000/getAllProducts');
        //console.log(resp.data.status);

        if (resp.data.status === 200){
            this.setState({
                students: resp.data.students,
                loading: true,
            })
        }
    }

    render() {
        var studentTable = "";

        if(this.state.loading){
            studentTable = <tr><td>Loading...</td></tr>
        }
        else {
            studentTable = this.state.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.productName}</td>
                        <td>{item.price}</td>
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
                        <th>Product Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {studentTable}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductList;