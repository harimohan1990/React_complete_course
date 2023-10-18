import React, { Component } from 'react'

export default class RenderingClassBaesd extends Component {
    constructor(props) {
        super(props);
        this.state = {
          counter: 0,
        };
      }
    
      handleIncrement = () => {
        this.setState({ counter: this.state.counter + 1 });
      };
    
      render() {
        return (
          <div>
            <p>Counter: {this.state.counter}</p>
            <button onClick={this.handleIncrement}>Increment</button>
          </div>
        );
      }
    }
    

