import React, { Component } from 'react';
import axios from 'axios';
import Child from '../Child/Child';

export default class Parent extends Component {
  constructor() {
    super()
    this.state = {
      things: []
    }
    this.getStuff = this.getStuff.bind(this)
  }

  getStuff() {
    axios.get('https://swapi.co/api/starships').then(res => {
      console.log(res.data.results)
      this.setState({
        things: res.data.results
      })
    }).catch(() => console.log('errrrrror'))
  }

  render() {
    return (
      <div>
        <button onClick={this.getStuff}>Get All the things</button>
        {/* {this.state.things} */}
        <Child />
      </div>
    )
  }
}