import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Router from './Router'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        {/* <Link to="/child">Child</Link>
        <br />
        <Link to="/">Parent</Link>
        <br />
        <Link to="/anotherchild">Another Child</Link> */}

        <Router />
        
      </div>
    );
  }
}

export default App;
