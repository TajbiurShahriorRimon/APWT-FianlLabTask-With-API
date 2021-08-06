import React, {Component, useEffect} from 'react';
import axios from "axios"; //install axios
import Cors from 'cors';

class ProductList extends Component{
//export default function ProductList() {
    //const [dataa, setData] = useState([]);

    state = {
        products: [],
        loading: true,
    }

    async componentDidMount() {
        const resp = await axios.get('http://localhost:8000/api/getAllProducts');
        console.log(resp.data);

        if (resp.data.status === 200){
            this.setState({
                products: resp.data.products,
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

    render() {
        var studentTable = "";

        if(this.state.loading){
            studentTable = <tr><td>Loading...</td></tr>
        }
        else {
            studentTable = this.state.products.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.productName}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
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
                        <th>Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {studentTable}
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

export default ProductList;