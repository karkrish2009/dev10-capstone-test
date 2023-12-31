import Rooms from './Rooms';
import RectangularShape from './RectangularShape';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { INITIAL_VALUE, ReactSVGPanZoom, TOOL_NONE } from "react-svg-pan-zoom";
import { useState } from 'react';

export default function Floorplan({roomsData, handleRoomsData}) {
    
    console.log("In floor plan", roomsData);

    
    
    return (
        
        <div className="container">
            <div className="item floorplan">
                <div style={{ width: "100%", height: "100%" }}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 500 550"
                    >
                    {roomsData.map((room) => (
                        <RectangularShape
                            x= {room.xCoord}
                            y= {room.yCoord}
                            length= {room.length}
                            breadth={room.breadth}
                            key={room.roomId}
                        />
                    ))}
                    </svg>
                    
                </div>
            </div>
        </div> 
    ); 
}

/*
 <polygon
                            
                            class="cls-1"
                            points="109.31 187.38 108.63 205 22 205 22 8 143 8 143 152.32 109.31 187.38"
                        />
                        <rect
                            class="cls-2"
                            x="59.28"
                            y="105"
                            width="50.03"
                            height="54.87"
                        />
                        <polygon
                
                            class="cls-1"
                            points="109.65 298.43 102.08 305.13 50.43 305.13 50.43 259.87 109.65 259.87 109.65 298.43"
                        /> */