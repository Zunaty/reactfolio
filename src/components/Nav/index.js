import React from 'react';

function Nav(props) {
    const { 
        aboutSelect,
        setAboutSelect,
        projectsSelect,
        setProjectsSelect,
    } = props;

    return (
        <div className="bg-gradient-to-r from-gray-800 via-pink-800 to-red-400 flex flex-col md:flex-row text-white font-mono shadow-2xl">
            <div className="self-center md:order-first my-5 mx-4 text-4xl">
                <a href="/reactfolio/" onClick={() => {
                    setAboutSelect(false); 
                    setProjectsSelect(false);
                }}>
                    Victor L Perez
                </a>
            </div>

            <div className="md:order-last self-center md:justify-self-end space-x-3 md:ml-auto my-5 md:mr-4">
                <button className={`rounded-lg ring-2 ring-gray-700 ring-offset-2 ring-offset-red-400 bg-pink-800 hover:bg-gray-800 shadow-md p-1 md:p-2 ${aboutSelect && 'animate-pulse md:animate-bounce'}`}
                    onClick={() => {setAboutSelect(true); setProjectsSelect(false)}}
                >About Me</button>
                <button className={`rounded-lg ring-2 ring-gray-700 ring-offset-2 ring-offset-red-400 bg-pink-800 hover:bg-gray-800 shadow-md p-1 md:p-2 ${projectsSelect && 'animate-pulse md:animate-bounce'}`}
                    onClick={() => {setAboutSelect(false); setProjectsSelect(true)}}
                >Projects</button>
            </div>
        </div>
    );
};

export default Nav;