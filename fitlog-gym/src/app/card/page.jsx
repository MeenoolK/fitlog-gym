import React from 'react';
import GymCard from './GymCard';


const cardPull = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    return res.json();
}




const page = async () => {
    const cardGets = await cardPull()
    return (
        <div>


            <div className=' mt-7 grid grid-cols-3 gap-5 justify-items-center'>{cardGets.map(cardGet => <GymCard key={cardGet.id} cardGet={cardGet}></GymCard>)}</div>
            
        </div>
    );
};

export default page;