import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
import StoreLocator from './StoreLocator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StoreLocator />
      </div>
    );
  }
}

export default App;
