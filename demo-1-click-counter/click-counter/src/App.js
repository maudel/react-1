import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        haz hecho click aqui {this.props.clicks} veces.
      </div>
    );
  }
}

export default App;
