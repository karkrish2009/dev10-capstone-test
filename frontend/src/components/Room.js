import RectangularDimensions from './RectangularDimensions';
import TempSettings from './TempSettings';
import { useParams, Link } from 'react-router-dom';
import React from "react"
import { useState, useEffect } from "react";


export default function Room() {
    const { id } = useParams();

    const [gameDetails, setGameDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("I am here 1");
        fetchGameDetails(id)
          .then((data) => {
            setGameDetails(data);
            //console.log("gameDetails", gameDetails.roomName);
          })
          .catch((error) => {
            console.error('Error fetching game details:', error);
            setError(error);
          });
    }, [id]);


    const fetchGameDetails = async(id) => {
        try {
          console.log("I am here ", id);
          const response = await fetch(("http://localhost:8080/api/room/" + 2),
           {
            method: "GET"
            }
          
          );
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          console.log("data", data[0]);
          return data[0];
        } catch (error) {
          throw new Error('Error fetching game details');
        }
    };

    const backgroundColorStyles = {
        backgroundColor: '#B5C689',
        padding: '20px',
    
    }

    const largerTextStyles = {
        fontSize: '25px',
    };

    const smallerTextStyles = {
        fontSize: '15px',
    };

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
            <Link to="/">Back to Home</Link>
          </div>
        );
    }
    
      
    

    if (gameDetails === null) {
        return <div>Loading...</div>;
    } else {

    return (
        <div style={backgroundColorStyles}>
            <h1 style={{ textAlign: "center", fontFamily: "'Press Start 2P', sans-serif" }}>{gameDetails.roomName}</h1>
            <p style={largerTextStyles}>Description: {gameDetails.roomDescription}</p>
        </div>
    );
}
}

/*
return (
    <div style={backgroundColorStyles}>
     <h1 style={{ textAlign: "center", fontFamily: "'Press Start 2P', sans-serif" }}>{gameDetails.roomName}</h1> -->
      <p style={largerTextStyles}>Release Date: {formattedReleaseDate}</p>
      <p style={largerTextStyles}>Rating: {gameDetails.rating}/5</p>
      <p style={largerTextStyles}>Metacritic Score: {gameDetails.metacritic}/100</p>
      <p style={largerTextStyles}>Average Playtime: {gameDetails.playtime} hours</p>
      <div>
        <h2>Platforms</h2>
        <ul>
          {gameDetails.platforms.map((platform) => (
            <li style={largerTextStyles} key={platform.platform.id}>{platform.platform.name}</li>
          ))}
        </ul>
      </div> */