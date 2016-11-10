import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import TodoList from './TodoList';


class App extends Component {
  writeData() {

    firebase.database().ref().child('todo').push({
      message: this.state.inputText,
      createAt: firebase.database.ServerValue.TIMESTAMP
    });

    this.setState({
      inputText: ''
    });

  }
  
  onKeyDown(e) {
    if (e.which === 13) {
      this.writeData() 
    }
  }

  componentDidMount() {
    firebase.database().ref().child('todo').on('child_added', (snapshot) => {
      this.setState({
        data: [...this.state.data, {...snapshot.val(), key: snapshot.key}]
      });
    });

    firebase.database().ref().child('todo').on('child_removed', (snapshot) => {
      this.setState({
        data: this.state.data.filter((mes) => mes.key !==  snapshot.key)
      });
    });
  }

  state = {
    inputText: '',
    data: []
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
       
        <input 
          type="text" placeholder="someword..." 
          value={ this.state.inputText } 
          onChange={ (e) => this.setState({ inputText: e.target.value }) } 
          onKeyDown={(e) => this.onKeyDown(e)}
          />
        
        <button onClick={() => this.writeData()} >Write Data</button>

        <TodoList items={ this.state.data } />
      </div>
    );
  }
}

export default App;
