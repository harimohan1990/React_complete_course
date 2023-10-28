import React, { Component } from "react";


class IIFE extends Component {
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
        {(function() {
          if (isLoggedIn) {
            return <button>Logout</button>;
          } else {
            return <button>Login</button>;
          }
        })()}
      </div>
    );
  }
}

export default IIFE;