import React, {Component} from 'react';

const LogIn = ({}) => {

    return(
        <div>
            <form action="">
                <table>
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

export default LogIn;