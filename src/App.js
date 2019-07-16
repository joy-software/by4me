import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button";

class App extends Component {
  render() {
    return (
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
                  Go Shop
                </Button>
              </td>
              <td>
                <span>  </span>
              </td>
              <td>
                <Button variant="contained" color="primary">
                  Bid
                </Button>
              </td>
            </tr>
            </tbody>
          </table>
        </header>

      </div>
    );
  }
}

export default App;
