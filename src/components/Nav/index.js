import React from 'react';

function Nav(props) {
    const { 
        aboutSelect,
        setAboutSelect,
        projectsSelect,
        setProjectsSelect, 
        contactSelect,
        setContactSelect
    } = props;

    return (
        <div className="bg-gradient-to-r from-gray-800 via-pink-800 to-red-400 flex flex-row text-white font-mono shadow-2xl">
            <div className="order-first my-5 mx-4 text-4xl">
                <a href="/">
                    Victor L Perez
                </a>
            </div>

            <div className="order-last justify-self-end space-x-3 ml-auto my-5 mr-4">
                <button className={`rounded-lg ring-2 ring-gray-700 ring-offset-2 ring-offset-red-400 ${aboutSelect && 'ring-2 animate-bounce'} bg-pink-800 hover:bg-gray-800 shadow-md p-2`}
                    onClick={() => {setAboutSelect(true); setProjectsSelect(false); setContactSelect(false)}}
                >About Me</button>
                <button className={`rounded-lg ring-2 ring-gray-700 ring-offset-2 ring-offset-red-400 ${projectsSelect && 'ring-2 animate-bounce'} bg-pink-800 hover:bg-gray-800 shadow-md p-2`}
                    onClick={() => {setAboutSelect(false); setProjectsSelect(true); setContactSelect(false)}}
                >Projects</button>
                <button className={`rounded-lg ring-2 ring-gray-700 ring-offset-2 ring-offset-red-400 ${contactSelect && 'ring-2 animate-bounce'} bg-pink-800 hover:bg-gray-800 shadow-md p-2`}
                    onClick={() => {setAboutSelect(false); setProjectsSelect(false); setContactSelect(true)}}
                >Contact Me</button>
            </div>
        </div>
    );
};

export default Nav;