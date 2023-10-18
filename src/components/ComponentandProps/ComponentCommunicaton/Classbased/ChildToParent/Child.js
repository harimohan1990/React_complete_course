import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
        <div>
        <h2>Child Component</h2>
        <p>{this.props.message}</p>
      </div>
    )
  }
}
