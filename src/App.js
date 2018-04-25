import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      things: []
    }
    this.getStuff = this.getStuff.bind(this)
  }

  getStuff() {
    axios.get('http://thecatapi.com/api/images/get?format=html').then(res => {
      console.log(res.data)
      this.setState({
        things: res.data
      })
    }).catch(() => console.log('errrrrror'))
  }

  render() {
    // let stuff = this.state.things.map((thing, i) => thing)
    return (
      <div className="App">
        <button onClick={this.getStuff}>Get All the things</button>
        {this.state.things}
      </div>
    );
  }
}

export default App;
