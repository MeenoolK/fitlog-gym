"use client";


import React, { useContext } from 'react';
import { GymContext } from "../contex/GymContex";
import { toast } from 'react-toastify';

const SetPlanButton = ({card}) => {

    const {todayPlan, setTodayPlan,} = useContext(GymContext);
    console.log(todayPlan, "testing")

    const handleAddPlan = ()=> {
        console.log("just chekcing working or not", card)
        setTodayPlan([...todayPlan,card]);
        toast.success(`You already made a Exercise "${card.name}"`)
    };
    return (
        <div>
            <button className="btn text-black bg-[#CCFF00] rounded-2xl" onClick={() => handleAddPlan()}>📅 Add to todays plan</button>
            
        </div>
    );
};

export default SetPlanButton;