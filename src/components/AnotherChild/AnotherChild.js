import React, { Component } from 'react'

import './AnotherChild.css'

export default class AnotherChild extends Component {
  constructor() {
    super()

    this.state = {
      switched: false,
    }

    this.toggleSwitch = this.toggleSwitch.bind(this)
  }

  toggleSwitch() {
    this.setState({
      switched: !this.state.switched
    })
  }

  render() {
    return (
      <div className={`topnav${this.state.switched ? ' responsive' : ''}`}>
        <a href="#home" className="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>

        <a href="javascript:void(0);" className="icon" onClick={this.toggleSwitch}>
          <i className="fa fa-bars" /></a>

      </div>
    )
  }
}