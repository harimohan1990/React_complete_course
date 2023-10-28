import React, { Component } from 'react'

export default class UsingTernaryOperator extends Component {

constructor(props){
    super(props)
    this.state ={
        isLoggedin : true
    }
}
  render() {

    let {isLoggedin} = this.state;
    return(
    isLoggedin ? 
    <div><button>Login</button></div> : <div><button>logout</button></div>
    )
  }
}
