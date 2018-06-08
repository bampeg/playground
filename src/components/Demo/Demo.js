import React, { Component } from 'react'
import './Demo.css'

export default class Demo extends Component {
  constructor() {
    super()
    this.state = {
      clicked: false,
      data: ['duck', 'frog', 'horse']
    }
  }
  render() {
    const animals = this.state.data.map(animal => {
      return (
        <h2 key={animal} className={this.state.clicked ? 'show' : ''}>{animal}</h2>
      )
    })
    
    let thing
    if (this.state.clicked) thing = <h2>first thing!</h2>
    else thing = <h2>second thing!</h2>

    return (
      <div>
        <input className={`default ${this.state.clicked ? '' : 'hide'}`} />
        <button
          onClick={() => this.setState({ clicked: !this.state.clicked })}>Click me</button>
        {/* <div className={this.state.clicked ? 'show' : ''}/> */}
        {animals}
        {thing}
      </div>
    )
  }
}