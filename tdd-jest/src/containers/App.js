import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          </p>
      </div>
    );
  }
}

export default App;
