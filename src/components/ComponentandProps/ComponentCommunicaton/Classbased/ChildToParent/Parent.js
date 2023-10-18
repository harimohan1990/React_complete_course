import React, { Component } from 'react'

import Child from './Child';
export default class Parent extends Component {
    state = {
        message: "Hello from Parent",
      };
      render() {
        return (
          <div>
            <h1>Parent Component</h1>
            <Child message={this.state.message} />
          </div>
        );
      }
 
}
