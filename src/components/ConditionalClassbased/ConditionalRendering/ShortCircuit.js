import React, { Component } from 'react'

export default class ShortCircuit extends Component {

  constructor(props){
    super(props)
    this.state ={
      isLoggedin : true
    }
  }
  render() {

    let {isLoggedin} = this.state
    return (
      <div>
        {isLoggedin && <button>Login</button>}
        <br/>
        <br/>
        {isLoggedin && <button>Logout</button>}
      </div>
    )
  }
}
