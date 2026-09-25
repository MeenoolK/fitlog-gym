import React from 'react';
import Image from 'next/image';

import skull from '../../../assets/banner.png'

const Banner = () => {
    return (
        <section className='m-5 md:m-10'>

            <div className="container mx-auto rounded-3xl bg-[#222630] grid grid-cols-1 md:grid-cols-2 items-center">

                <div className='m-5 md:m-10'>

                    <h2 className='mx-3 md:mx-7 text-[#C2F800]'>WORKOUT LIBRARY</h2>
                    <h1 className='font-extrabold text-3xl md:text-4xl m-3 md:m-5'>
                        TRAIN WITH INTENT. LOG <br className='hidden md:block' /> EVERY SET.
                    </h1>
                    <p className='mx-3 md:mx-5 text-[#9CA3AF]'>
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br className='hidden md:block' /> into todays plan, and watch the weeks work add up.
                    </p>
                    <button className='btn btn-active bg-[#C2F800] rounded-2xl text-black mt-8 md:mt-13 p-6 mx-3'>
                        BROWSE WORKOUTS
                    </button>

                </div>

                <div className='mx-5 md:mx-20 lg:mx-50 my-10 md:my-20'>
                    <Image src={skull} alt='human exercise' className='w-full h-auto'></Image>
                </div>

            </div>

        </section>
    );
};

export default Banner;
