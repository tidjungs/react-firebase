import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyAXh7LHMyUIpp4D-TwFP3r2AjaZUvdRrDQ",
  authDomain: "react-firebase-e39ec.firebaseapp.com",
  databaseURL: "https://react-firebase-e39ec.firebaseio.com",
  storageBucket: "react-firebase-e39ec.appspot.com",
  messagingSenderId: "630558799847"
}

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
