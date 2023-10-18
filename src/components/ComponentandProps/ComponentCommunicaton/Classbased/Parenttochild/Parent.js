import React, { Component } from 'react';
import ChildComponent from './Child'
class ParentComponent extends Component {
  state = {
    messageFromChild: '',
  };

  handleChildCommunication = (message) => {
    this.setState({ messageFromChild: message });
  };

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <ChildComponent onChildCommunication={this.handleChildCommunication} />
        <p>Message from Child: {this.state.messageFromChild}</p>
      </div>
    );
  }
}

export default ParentComponent;
