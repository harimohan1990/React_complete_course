import React, { Component } from 'react'

export default class Ifelse extends Component {
    constructor(props){
        super(props)
        this.state ={
            isLogggedin : true
        }
    }
    render() {
        let {isLoggedIn} = this.state;

            {
              if(!isLoggedIn){
                return(<button>Logout</button> )
              } else{
                return(<button>login</button> )
              }
            }
       
      }
    }