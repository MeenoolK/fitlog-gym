import React from 'react';
import Image from 'next/image';


const GymCard = ({ cardGet }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <Image
                src={cardGet.image}
                alt={cardGet.name}
                width={640}
                height={540}
                className="w-full h-64 object-cover"
            />
            </figure>
            <div className="card-body">

                <div className="flex gap-3 flex-wrap">
                    {cardGet.muscleGroups?.map((bodyPart, partIndex) => (
                        <div key={partIndex} className="badge badge-secondary">
                            {bodyPart}
                        </div>
                    ))}
                </div>


                <h2 className="card-title">
                    {cardGet.name}
                </h2>
                <p >{cardGet.equipment}</p>

                <hr />
                <div className="card-actions ">
                    <div className=" "> 🕜{cardGet.duration} min</div>
                    <div className="">  ❤️‍🔥{cardGet.caloriesBurned} kcal</div>
                    {/* <div className=""> ⭐{cardGet.rating}</div> */}
                </div>
            </div>
        </div>
    );
};

export default GymCard;