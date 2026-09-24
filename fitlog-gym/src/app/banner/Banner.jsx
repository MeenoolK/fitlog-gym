import Image from 'next/image';
import React from 'react';
import skull from '../../../assets/banner.png'


const Banner = () => {
    return (
        <section className='m-10'>

            <div className="container mx-auto rounded-3xl bg-[#222630] grid grid-cols-2 items-center ">

                <div className='m-10'>

                    <h2 className='mx-7 text-[#C2F800]'>WORKOUT LIBRARY</h2>
                    <h1 className='font-extrabold text-4xl m-5'>TRAIN WITH INTENT. LOG <br /> EVERY SET.</h1>
                    <p className='mx-5 text-[#9CA3AF]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> into today's plan, and watch the week's work add up.</p>
                    <button className='btn btn-active bg-[#C2F800] rounded-2xl text-black mt-13 p-6 mx-3'>BROWSE WORKOUTS</button>

                </div>

                <div className='mx-50 my-20'>
                    <Image src={skull} alt='human exercise'></Image>
                </div>
                 

            </div>
            
        </section>
    );
};

export default Banner;