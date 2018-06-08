import React, { Component } from 'react';
import axios from 'axios';
import Switch from 'react-toggle-switch'

import '../../../node_modules/react-toggle-switch/dist/css/switch.min.css'
import Child from '../Child/Child';

export default class Parent extends Component {
  constructor() {
    super()
    this.state = {
      things: [],
      cats: [],
      stuff: ['first', 'second', 'third'],
      clicked: false,
      switched: false
    }

    this.something = this.state.stuff.map(thing => {
      return this.thing = React.createRef()
    })

    this.getStuff = this.getStuff.bind(this)
    this.getCats = this.getCats.bind(this)
  }

  getStuff() {
    axios.get('https://swapi.co/api/starships').then(res => {
      console.log(res)
      this.setState({
        things: res.data.results
      })
    }).catch(() => console.log('errrrrror'))
  }

  getCats() {
    axios.get('http://thecatapi.com/api/images/get?type=gif&format=html')
      .then(res => {
        let cats = res.data.toString().split('"').filter(string => string.includes('gif'))
        this.setState({
          cats: cats
        })
      })
      .catch(() => console.log('No cats for you.'))
  }

  getOtherCats() {
    axios({
      method: 'get',
      url: 'http://thecatapi.com/api/images/get/',
      maxContentLength: 2000
    })
      .then(res => console.log(res.data))
      .catch(() => console.log('nope.'))
  }

  handleRef(ruf) {
    console.log(ruf.current.firstChild)
  }

  render() {
    console.log(this.something)
    console.log(this.state.cats)

    let allTheThings = this.state.things.map((thing, i) => <h4 key={i}>{thing.name}</h4>)

    let theStuff = this.state.stuff.map((thing, i) => {
      return (
        <h1 ref={this.something[i]} onClick={() => this.handleRef(this.something[i])}>{thing}</h1>
      )
    })

    let thing = "Thing"
    if (this.state.clicked) {
      thing = "clickedThing"
    }

    return (
      <div>
        <Child getStuff={this.getStuff} getCats={this.getCats} />
        {allTheThings}
        <img src={this.state.cats} alt="" />

        {/* <h1 ref={this.firstRef} onClick={() => this.handleRef(this.firstRef)}>First Ref</h1>
        <h1 ref={this.secondRef} onClick={() => this.handleRef(this.secondRef)}>Second Ref</h1> */}
        {theStuff}

        <button onClick={() => this.getOtherCats()}>Clickee</button>

        <div className={`Thing ${thing}`} onClick={() => this.setState({ clicked: !this.state.clicked })}>Thing</div>
        <Switch onClick={this.toggleSwitch} on={this.state.switched} />

      </div>
    )
  }
}