import React from 'react'
import logo from '../assets/img/logo.svg';
import '../assets/css/App.css';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const Home = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>
                Buy Over
            </h2>
            <br/>
            <br/>
            <table>
                <tbody>
                <tr>
                    <td>
                        <Button variant="contained" color="secondary">
                            <Link to='/shop' style={{ textDecoration: 'none', color: '#fff'}}>Go Shop</Link>
                        </Button>
                    </td>
                    <td>
                        <span>  </span>
                    </td>
                    <td>
                        <Button variant="contained" color="primary">
                            <Link to='/bid' style={{ textDecoration: 'none', color: '#fff'}}>Bid</Link>
                        </Button>
                    </td>
                </tr>
                </tbody>
            </table>
        </header>
    </div>
)

export default Home