import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameForm from './components/GameForm';
import Landing from "./components/Landing";
import GameList from './components/GameList';


function App() {
  const [gamesData, setGamesData] = useState([]);
  const handleGamesData=(gamesData)=>{
    setGamesData(gamesData);
  }
  return (
    <Router>
      
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/preferences' element={<GameForm />}></Route>
        <Route path='/results' element={<GameList gamesData={gamesData} handleGamesData={handleGamesData}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
