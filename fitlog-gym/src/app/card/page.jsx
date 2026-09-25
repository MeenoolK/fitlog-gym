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

            <div className='ml-20 '>
                <h1 className='font-extrabold text-3xl'>THE LIBRARY</h1>
                <p className='text-[#9CA3AF] mt-3'>Twelve lifts covering every major muscle group.</p>

            </div>


            <div className='grid grid-cols-1  gap-6  sm:grid-cols-2 lg:grid-cols-3 m-12'>{cardGets.map(cardGet => <GymCard key={cardGet.id} cardGet={cardGet}></GymCard>)}</div>
            
        </div>
    );
};

export default page;