import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';


class App extends Component {
  writeData() {
    firebase.database().ref('data2').set({
      username: "tidjungs",
      email: "xxx@hotmail.com",
      id: "5810500307"
    }).then(() => {
      console.log("success");
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.writeData()}>Write Data</button>
      </div>
    );
  }
}

export default App;
