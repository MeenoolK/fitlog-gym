import React from 'react';
import Link from 'next/link';






const cardPull = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    return res.json();
}




const page = async ({params}) => {
    const {id} = await params;

    const cards = await cardPull();
    const card = cards.find((gymItem) => String(gymItem.id) ===  String(id))





    if(!card) {
        return(
            <div className='text-center m-50'>
                <h2 className='text-8xl font-bold'>404 Error</h2>
                <h2 className='text-7xl font-bold mt-13'>The given page is not found</h2>
                <button className='btn btn-error text-2xl mt-23'> <Link href="/">Back to Home</Link></button>
            </div>
        )
    }
    return (
        <div>
            <h3>Gym Id {id}</h3>
            <h4>time {params.rating}</h4>
            
        </div>
    );
};

export default page;