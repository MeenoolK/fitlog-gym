"use client";


import React, { useContext } from 'react';
import { GymContext } from "../contex/GymContex";
import { toast } from 'react-toastify';

const LaterPlanButton = ({card}) => {

    const {saveLater, setSaveLater,} = useContext(GymContext);
   

    const handleAddLater = ()=> {
        console.log("just chekcing working or not the later", card)
        setSaveLater([...saveLater,card]);
        toast.success(`You already set the exercise to do later "${card.name}"`)
    };
    return (
        <div>
            <button className="btn btn-outline text-amber-50 rounded-2xl border-[]" onClick={() => handleAddLater()}>📋 Save for later</button>
            
        </div>
    );
};

export default LaterPlanButton;