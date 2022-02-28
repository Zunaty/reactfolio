import React from 'react';

function Nav(props) {
    const { 
        aboutSelect,
        setAboutSelect,
        projectsSelect,
        setProjectsSelect,
        gamesSelect,
        setGamesSelect
    } = props;

    return (
        <div className="bg-gradient-to-r from-gray-800 via-pink-700 to-pink-900 flex flex-col md:flex-row text-white font-mono shadow-2xl fixed top-0 w-full z-50">
            <div className="self-center md:order-first my-5 mx-4 text-4xl">
                <a className="hover:text-gray-500 transition duration-500 ease-in-out" 
                    href="/reactfolio/" onClick={() => {
                    setAboutSelect(false); 
                    setProjectsSelect(false);
                }}>
                    Victor L Perez
                </a>
            </div>

            <div className='hidden'>
                Your score: !
            </div>

            <div className="md:order-last self-center md:justify-self-end space-x-5 md:ml-auto md:mr-5 md:text-lg flex flex-wrap">
                <a href="https://github.com/Zunaty" target="_blank" rel="noreferrer" className="hover:text-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">GitHub</a>
                <a href="https://www.linkedin.com/in/victorlperez/" target="_blank" rel="noreferrer" className="hover:text-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">LinkedIn</a>
                <a href="https://docs.google.com/document/d/1UsKsOZwaKIe5Dg2pLueD0-d8S9xfY343ub4I1yExn_Y/edit?usp=sharing" target="_blank" rel="noreferrer" className="hover:text-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Resume</a>
                {/* <button className={`invisible lg:visible lg:rounded-lg ring-2 ring-gray-700 ring-offset-2 ring-offset-red-400 bg-pink-800 hover:bg-gray-800 shadow-md p-1 lg:p-2 ${aboutSelect && 'animate-pulse'}`}
                    onClick={() => {setAboutSelect(true); setProjectsSelect(false); setGamesSelect(false);}}
                >About Me</button>
                <button className={`invisible lg:visible lg:rounded-lg ring-2 ring-gray-700 ring-offset-2 ring-offset-red-400 bg-pink-800 hover:bg-gray-800 shadow-md p-1 lg:p-2 ${projectsSelect && 'animate-pulse'}`}
                    onClick={() => {setAboutSelect(false); setProjectsSelect(true); setGamesSelect(false);}}
                >Projects</button> */}
                {/* <button className={`invisible lg:visible lg:rounded-lg ring-2 ring-gray-700 ring-offset-2 ring-offset-red-400 bg-pink-800 hover:bg-gray-800 shadow-md p-1 lg:p-2 ${gamesSelect && 'animate-pulse'}`}
                    onClick={() => {setAboutSelect(false); setProjectsSelect(false); setGamesSelect(true);}}
                >Games</button> */}
            </div>
        </div>
    );
};

export default Nav;