function App() {
  // Click handler function defined here
  function handleClick() {
      alert('button clicked');
  }

  return (
      <div className='App'>
          {/* Pass the reference to the click handler to the onClick prop */}
          <button onClick={handleClick}>Click me!</button>
      </div>
  );
}

export default App;



