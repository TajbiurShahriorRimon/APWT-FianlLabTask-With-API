import React, {Component} from 'react';

const Registration = ({}) => {

    return(
        <div>
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
                            <input type="submit" value="Login"/>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default Registration;