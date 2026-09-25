import React from 'react';
import Link from 'next/link';
import Image from 'next/image';





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
        <div className="card card-side  shadow-sm mt-10">
            
            <figure>
                <Image
                    src={card.image}
                    alt="Exercise Images"
                    height= {600}
                    width={500}

                    className=' ml-29 mt-10'/>
            </figure>
            <div className="card-body ml-30">
                <h2 className="card-title font-extrabold text-3xl">{card.name}</h2>
                <p className=''>{card.description}</p>

                <div className="flex gap-3 flex-wrap -translate-y-78">
                        {card.muscleGroups?.map((bodyPart, partIndex) => (
                            <div key={partIndex} className=" bg-[#C2F800] text-black badge font-bold ">
                                {bodyPart}
                            </div>
                        ))}

                    
                    </div>


                    <div className="bg-[#151922] rounded-2xl">

    <div className="flex justify-between p-5 border-b border-gray-800">
        <span className="font-bold text-gray-400">EQUIPMENT</span>
        <span>{card.equipment}</span>
    </div>

    <div className="flex justify-between p-5 border-b border-gray-800">
        <span className="font-bold text-gray-400">DIFFICULTY</span>
        <span>{card.difficulty}</span>
    </div>

    <div className="flex justify-between p-5 border-b border-gray-800">
        <span className="font-bold text-gray-400">SETS</span>
        <span>{card.sets}</span>
    </div>

    <div className="flex justify-between p-5 border-b border-gray-800">
        <span className="font-bold text-gray-400">REPS</span>
        <span>{card.reps}</span>
    </div>

    <div className="flex justify-between p-5 border-b border-gray-800">
        <span className="font-bold text-gray-400">DURATION</span>
        <span>{card.duration} min</span>
    </div>

    <div className="flex justify-between p-5 border-b border-gray-800">
        <span className="font-bold text-gray-400">CALORIES</span>
        <span>{card.caloriesBurned} kcal</span>
    </div>

    <div className="flex justify-between p-5">
        <span className="font-bold text-gray-400">RATING</span>
        <span>{card.rating}</span>
    </div>

</div>



                <ol className='grid grid-cols-1 gap-3 mt-7'>
                    <h1 className='text-2xl font-bold'>INSTRUCTIONS</h1>
                    <li className='text-[#D1D5DB]'>1. {card.instructions[0]}</li>
                    <li className='text-[#D1D5DB]'>2. {card.instructions[1]}</li>
                    <li className='text-[#D1D5DB]' >3. {card.instructions[2]}</li>
                    <li className='text-[#D1D5DB]'>4. {card.instructions[3]}</li>
                </ol>



                    
                <div className="card-actions ">
                    <button className="btn text-black bg-[#CCFF00] rounded-2xl">📅 Add to todays plan</button>
                    <button className="btn btn-outline text-amber-50 rounded-2xl border-[] ">📋 Save for later</button>
                </div>
            </div>
        </div>
    );
};

export default page;