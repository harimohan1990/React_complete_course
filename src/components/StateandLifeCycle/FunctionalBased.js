import React, { useState, useEffect, useRef } from 'react';

const FunctionalComponent = React.memo(({ messageProp }) => {
  const [message, setMessage] = useState(messageProp);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const prevProps = useRef();

  useEffect(() => {
    console.log('Constructor: This is the first phase of the component lifecycle.');
    prevProps.current = message;
  }, []);

  useEffect(() => {
    console.log('getDerivedStateFromProps: This method is rarely used, but it can be helpful to derive state from props.');
  }, [message]);

  useEffect(() => {
    console.log('componentDidMount: Component has been mounted.');
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setData(null);
        setIsLoading(false);
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    console.log('shouldComponentUpdate: Decide whether the component should update.');
    if (/* Your condition to update */) {
      // Handle updates here
    }
  }, [message]);

  useEffect(() => {
    console.log('getSnapshotBeforeUpdate: Capture information before the update.');
  });

  useEffect(() => {
    console.log('componentDidUpdate: Component has been updated.');
    // You can perform post-update tasks here.
  });

  useEffect(() => {
    return () => {
      console.log('componentWillUnmount: This method is called just before the component is removed from the DOM.');
    };
  }, []);

  const renderMessage = () => {
    console.log('Render Message: This is a custom method.');
    return <p>{message}</p>;
  }

  return (
    <div>
      <h1>{message}</h1>
      {renderMessage()}
    </div>
  );
});

export default FunctionalComponent;
