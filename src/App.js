function HelloButton() {
    return <button onClick={() => console.log('Hello!')}>Click</button>;
}

function App() {
    return (
        <div>
            <h1>Hello World</h1>
            <HelloButton />
        </div>
    );
}

export default App;


