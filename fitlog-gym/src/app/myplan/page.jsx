"use client";


import React, { useContext } from 'react';
import { GymContext } from '../contex/GymContex';

const ListedGym = () => {

    const {todayPlan, saveLater} = useContext(GymContext)
    console.log(todayPlan, saveLater, "started reading" , "LAter save plan")
    return (
        <div>
            
        </div>
    );
};

export default ListedGym;