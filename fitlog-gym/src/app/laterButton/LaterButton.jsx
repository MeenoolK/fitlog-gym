"use client";


import React, { useContext } from 'react';
import { GymContext } from "../contex/GymContex";

const LaterPlanButton = ({card}) => {

    const {saveLater, setSaveLater,} = useContext(GymContext);
   

    const handleAddLater = ()=> {
        console.log("just chekcing working or not the later", card)
        setSaveLater([...saveLater,card]);
        alert(`You already made a Exercise "${card.name}"`)
    };
    return (
        <div>
            <button className="btn btn-outline text-amber-50 rounded-2xl border-[]" onClick={() => handleAddLater()}>📋 Save for later</button>
            
        </div>
    );
};

export default LaterPlanButton;