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
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex flex-row text-white font-mono">
            <div className="order-first my-5 mx-4 text-4xl">
                <a href="/">
                    Victor L Perez
                </a>
            </div>

            <div className="order-last justify-self-end space-x-3 ml-auto my-5 mr-4">
                <button className={`rounded-lg ring-1 ${aboutSelect && 'ring-2 bg-gradient-to-r from-pink-800 to-pink-500'} bg-gradient-to-r from-pink-500 to-pink-700 p-2 shadow-md`}
                    onClick={() => {setAboutSelect(true); setProjectsSelect(false); setContactSelect(false)}}
                >About Me</button>
                <button className={`rounded-lg ring-1 ${projectsSelect && 'ring-2 bg-gradient-to-r from-pink-800 to-pink-500'} bg-gradient-to-r from-pink-500 to-pink-700 p-2 shadow-md`}
                    onClick={() => {setAboutSelect(false); setProjectsSelect(true); setContactSelect(false)}}
                >Projects</button>
                <button className={`rounded-lg ring-1 ${contactSelect && 'ring-2 bg-gradient-to-r from-pink-800 to-pink-500'} bg-gradient-to-r from-pink-500 to-pink-700 p-2 shadow-md`}
                    onClick={() => {setAboutSelect(false); setProjectsSelect(false); setContactSelect(true)}}
                >Contact Me</button>
            </div>
        </div>
    );
};

export default Nav;