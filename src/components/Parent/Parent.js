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
    let allTheThings = this.state.things.map(thing => <h4>{thing.name}</h4>)
    return (
      <div>
        <Child getStuff={this.getStuff} />
        {allTheThings}
      </div>
    )
  }
}