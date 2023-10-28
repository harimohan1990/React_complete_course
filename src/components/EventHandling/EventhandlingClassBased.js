import React, { Component } from 'react';

class ButtonComponent extends Component {
  // Define a custom event handler function
  handleClick = () => {
    alert('Button clicked!');
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default ButtonComponent;
