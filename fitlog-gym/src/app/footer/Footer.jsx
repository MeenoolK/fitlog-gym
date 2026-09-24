import React from 'react';
import Image from 'next/image';
import footLogo from '../../../assets/logo.png'


const Footer = () => {
    return (

        <footer >

            <div className=" mt-17 footer sm:footer-horizontal justify-between bg-base-300 text-base-content p-4">
            
            <div className='flex'>
                <Image src={footLogo} alt='Footer logo'></Image>
                <h1 className='font-bold'>FITLOG</h1>

            </div>


                <aside>
                    <p className='text-[#6B7280]'> © {new Date().getFullYear()} FitLog  --- Workout Library. Train hard, log honest.</p>
                </aside>


            </div>

        </footer>
    );
};

export default Footer;