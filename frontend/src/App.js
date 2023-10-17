import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Room from './components/Room';
import Landing from "./components/Landing";

function App() {
    return (
        <Router>
     
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path="/rooms/:id" element={<Room />} />   
            </Routes>
        </Router>
    );
}

export default App;


