import React, { Component } from 'react';

export default class Switch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogging: true 
        };
    }

    switchcase = () => {
        switch (this.state.isLogging) { 

            case true:
                return <button>Login</button>;

            case false:
                return <button>Logout</button>; 

            default:
                return null;
        }
    }

    render() {
        return (
            <div>{this.switchcase()}</div> 
        );
    }
}
