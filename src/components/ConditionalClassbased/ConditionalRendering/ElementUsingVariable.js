import React, { Component } from 'react'

export default class ElementUsingVariable extends Component {
    constructor(props){
        super(props)
        this.state ={
            isLoggedin : true
        }
    }
  render() {

    let {isLoggedin} = this.state;

    let buttonAuth ;

    if(isLoggedin){
        return(
            buttonAuth = <button>Login</button>
        )
      
    }
    else{
        return(
            buttonAuth = <button>Logout</button>
        )
       
    }
   
  }
}
