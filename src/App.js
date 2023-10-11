function App() {
  let showModal = true;

  return (
      <div className='App'>
          <div className={showModal === false ? 'hide' : 'show'}>
              A Modal Element
          </div>
      </div>
  );
}

export default App;

