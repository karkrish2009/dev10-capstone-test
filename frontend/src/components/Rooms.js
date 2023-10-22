import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export default function Rooms({roomsData, handleRoomsData}) {
    const { state } = useLocation();
    const formData = state?.formData || {};

    console.log("I am now in rooms", formData.houses[0]);

    
    const fetchExistingRooms = async () => {
        try {
          const response = await fetch(`http://localhost:8080/api/house/` + formData.houses[0], {
            method: "GET",
          });
    
          if (response.ok) {
            return response.json(); // Parse and return JSON data
          } else if (response.status >= 500) {
            return response.json()
              .then((error) => Promise.reject(new Error(error.message)))
              .then(console.log("No Preferences Found"));
          } else {
            return Promise.reject(new Error(`Unexpected status code ${response.status}`));
          }
        } catch (error) {
          return Promise.reject(error);
        }
      };
      // Then, in your useEffect, handle the result:
    
      useEffect(() => {
        fetchExistingRooms()
        .then((existingRooms) => {
        // Populated form fields with existing preferences
            console.log("Existing rooms are:", existingRooms);
            handleRoomsData(existingRooms);
            })
        .catch((error) => {
        console.error("An error occurred:", error);
      });
    }, []); 

    
    
    const rooms = [{
            roomId: 1,
            name: 'Living Room',
            description: 'meeting guests, vistors',
            imageUrl: "https://photos.zillowstatic.com/i_g/IS9t4g9yhe8v901000000000.jpg",
            dimensions: {
                length: 20,
                breadth: 10,
                height: 10
            },
            tempSettings: [
                {
                    settingId: 1,
                    startTime: '9 PM',
                    endTime: '5 PM',
                    setTemp: 65
                },
                {
                    settingId: 2,
                    startTime: '5 PM',
                    endTime: '9 PM',
                    setTemp: 75
                },

            ]
        },
        {
            roomId: 2,
            name: 'Family Room',
            description: 'TV post-dinner gathering place',
            imageUrl : "https://photos.zillowstatic.com/fp/0d24279d2c4273aca2c1c7d86d98d219-uncropped_scaled_within_1344_1008.jpg",
            dimensions: {
                length: 32,
                breadth: 22,
                height: 12
            },
            tempSettings: [
                {
                    settingId: 1,
                    startTime: '8 AM',
                    endTime: '3 PM',
                    setTemp: 65
                },
                {
                    settingId: 2,
                    startTime: '3 PM',
                    endTime: '11 PM',
                    setTemp: 75
                },
                {
                    settingId: 3,
                    startTime: '11 PM',
                    endTime: '8 AM',
                    setTemp: 60
                }

            ]
        },
        
        {
            roomId: 3,
            name: 'Kitchen',
            description: 'Cooking and informal eating',
            imageUrl: "https://www.stevewilliamskitchens.co.uk/wp-content/uploads/2015/11/kitchen-interior-design-ideas-gallery2.jpg",
            dimensions: {
                length: 15,
                breadth: 15,
                height: 10
            },
            tempSettings: [
                {
                    settingId: 1,
                    startTime: '5 AM',
                    endTime: '9 AM',
                    setTemp: 75
                },
                {
                    settingId: 2,
                    startTime: '9 AM',
                    endTime: '3 PM',
                    setTemp: 65
                },
                {
                    settingId: 3,
                    startTime: '3 PM',
                    endTime: '10 PM',
                    setTemp: 75
                },
                {
                    settingId: 4,
                    startTime: '10 PM',
                    endTime: '5 AM',
                    setTemp: 60
                }
            ]
        },
        {
            roomId: 4,
            name: 'Bedroom',
            description: 'We sleep here',
            imageUrl: "https://cdn.trendir.com/wp-content/uploads/2018/04/rustic-green-bedroom.jpg",
            dimensions: {
                length: 25,
                breadth: 25,
                height: 15
            },
            tempSettings: [
                {
                    settingId: 1,
                    startTime: '5 AM',
                    endTime: '9 AM',
                    setTemp: 75
                },
                {
                    settingId: 2,
                    startTime: '9 AM',
                    endTime: '3 PM',
                    setTemp: 65
                }
            ]
        }
        
    ];
    
    const largerTextStyles = {
        fontSize: '25px',
    };
    
    return (
        <div className="library-container">
            <button className='btn btn-primary mb-3'>Add a Room</button>
            <div className="game-cards-container">
            {rooms.map((roomsData) => (
               
                <Link to={`/rooms/${roomsData.roomId}`} key={roomsData.roomId}>
                    <div className="game-card">
                        <div className="game-card-image">
                            <img src={roomsData.imageUrl} alt={roomsData.name} />
                            <div className="game-name-overlay">
                                <p style={largerTextStyles}>Name: {roomsData.name}</p>
                                <p style={largerTextStyles}>Description: {roomsData.description}</p>
                            </div>
                        </div>

                    </div>
                </Link>
          
            ))}
               
            </div>
            
            
        </div>
    );
}