import React from 'react';

export default function Home() {

    return (
        <div className="container h-screen w-screen overflow-hidden">
            <div className='container w-5/6 text-white font-mono text-4xl m-5 md:text-5xl md:m-20 '>
                Welcome to my portfolio!
            </div>

            <div className='container w-9/12 text-white font-mono m-5 md:m-20'>
                <p className='break-normal'>
                    If you want know some things about me click on the button above! Also check out my recent works in the projects page.
                </p>
            </div>

            <div className='container w-9/12 text-white font-mono m-5 md:m-20'>
                <p className='break-normal'>
                    I'm currently updating this portfolio, this home page will change soon.
                </p>
            </div>
        </div>
    )
};