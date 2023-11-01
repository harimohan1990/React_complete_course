function UncontrolledComponent() {
    let inputRef = React.createRef();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Input value: ', inputRef.current.value);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    );
  }
  