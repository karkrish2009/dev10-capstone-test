import { Fragment } from 'react'; // Import Fragment out of the React package

function App() {
    const pet = {
        name: 'Snoopy',
        breed: 'Beagle',
        age: 8,
    };

    return (
        <Fragment>
            <h1>Name: {pet.name}</h1>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age} years</p>
        </Fragment>
    );
}

export default App;


