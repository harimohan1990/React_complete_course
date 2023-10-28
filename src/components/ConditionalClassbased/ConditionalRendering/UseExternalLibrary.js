import React, { Component } from 'react'

export default class UseExternalLibrary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    let { isLoggedIn } = this.state;

    return (
      <div className="App">
        <h1>
          This is a Demo showing several ways to implement Conditional Rendering in React.
        </h1>
        <Choose>
          <When condition={isLoggedIn}>
             <button>Logout</button>;
          </When>
          <When condition={!isLoggedIn}>
             <button>Login</button>;
          </When>
        </Choose>
      </div>
    );
  }

}
