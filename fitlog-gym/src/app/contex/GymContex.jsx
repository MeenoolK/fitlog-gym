"use client";



import React, { createContext, useState } from 'react';


export const GymContext = createContext({})


const GymProvider = ({ children }) => {

    const [todayPlan, setTodayPlan] = useState([]);
    const [saveLater, setSaveLater] = useState([]);


    const transferData = {
        todayPlan, setTodayPlan, saveLater, setSaveLater,
    }

    return (
        <div>

            <GymContext.Provider value={transferData}>
                {children}
            </GymContext.Provider>

        </div>
    );
};

export default GymProvider;