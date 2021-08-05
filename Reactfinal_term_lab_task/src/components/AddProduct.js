import React, {Component} from 'react';

const AddProduct = ({}) => {

    return(
        <div>
            <form action="">
                <table>
                    <tr>
                        <td>Product Name</td>
                        <td>
                            <input type="text"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>
                            <input type="text"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Quantity</td>
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
                            <input type="submit" value="Add Product"/>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default AddProduct;