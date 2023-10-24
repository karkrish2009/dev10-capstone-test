import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Houses from './components/Houses';
import Room from './components/Room';
import Rooms from './components/Rooms';
import Header from './components/Header';
import Landing from "./components/Landing";
import Floorplan from "./components/Floorplan";
import { useState } from 'react';


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const[isUserId, setisUserId]= useState(2);
    const [roomsData, setRoomsData] = useState([]);
    const handleRoomsData=(roomsData)=>{
        setRoomsData(roomsData);
    }
    const [isHouseId, setHouseId] = useState(0);
    const handleHouseId=(houseId)=>{
        setHouseId(houseId);
      }


    
    return (
        <Router>
            <Header isAuthenticated={isAuthenticated}/>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/selection' element={<Houses isUserId={isUserId} isHouseId={isHouseId} handleHouseId={handleHouseId} />} />
                <Route path="/floorplan" element={<Floorplan roomsData={roomsData} handleRoomsData={handleRoomsData}  />} />
                <Route path="/results" element={<Rooms roomsData={roomsData} handleRoomsData={handleRoomsData} isHouseId={isHouseId} />} />
                <Route path="/rooms/:id" element={<Room />} />   
            </Routes>
        </Router>
    );
}

export default App;


