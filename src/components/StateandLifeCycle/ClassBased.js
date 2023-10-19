import React, { Component } from 'react';

class ClassBased extends Component {
  constructor(props) {
    super(props);
    // Initialize state in the constructor
    this.state = {
      message: 'Hello, React!',
      state: data
    };
    console.log('Constructor: This is the first phase of the component lifecycle.');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps: This method is rarely used, but it can be helpful to derive state from props.');
    return null; // Return an object to update state or null to do nothing
  }

  componentDidMount() {
    // Use the fetch API to make an API call
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Update the state with the fetched data
        this.setState({ data, isLoading: false, error: null });
      })
      .catch((error) => {
        // Handle errors, if any
        this.setState({ data: null, isLoading: false, error: error.message });
      });
  }

  render() {
    console.log('Render: This method returns the JSX structure to be rendered.');
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }

  renderMessage = () => {
    console.log('Render Message: This is a custom method.');
    return <p>{this.state.message}</p>;
  }

  // Custom methods can be defined outside of the lifecycle methods
 

  componentWillUnmount() {
    console.log('componentWillUnmount: This method is called just before the component is removed from the DOM.');
  }

  // ...other custom methods

  render() {
    console.log('Render: This method returns the JSX structure to be rendered.');
    return (
      <div>
        <h1>{this.state.message}</h1>
        {this.renderMessage()}
      </div>
    );
  }
}

export default ClassBased;
