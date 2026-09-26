"use client";


import React, { useContext } from 'react';
import { GymContext } from '../contex/GymContex';

const ListedGym = () => {

    const {todayPlan} = useContext(GymContext)
    console.log(todayPlan, "started reading" )
    return (
        <div>
            
        </div>
    );
};

export default ListedGym;