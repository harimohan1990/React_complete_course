import React, { Component } from 'react';

class ChildComponent extends Component {
  sendMessageToParent = () => {
    this.props.onChildCommunication('Hello from Child');
  };

  render() {
    return (
      <div>
        <h2>Child Component</h2>
        <button onClick={this.sendMessageToParent}>Send Message to Parent</button>
      </div>
    );
  }
}

export default ChildComponent;
