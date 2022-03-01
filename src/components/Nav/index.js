import React from 'react';

function Nav(props) {
    const {
        setAboutSelect,
        setProjectsSelect,
        setGamesSelect
    } = props;

    return (
        <div className="bg-gradient-to-r from-gray-800 via-pink-700 to-pink-900 flex flex-col md:flex-row text-white font-mono shadow-2xl fixed top-0 w-full z-50">
            {/* Holds my name, acts as a home button */}
            <div className="self-center md:order-first my-5 mx-4 text-4xl">
                <a className="hover:text-gray-500 transition duration-500 ease-in-out"
                    href="/reactfolio/" onClick={() => {
                        setAboutSelect(false);
                        setProjectsSelect(false);
                        setGamesSelect(false);
                    }}>
                    Victor L Perez
                </a>
            </div>

            {/* This will hold updating score for everything clicked on throughout the site */}
            <div className='hidden'>
                Your score: !
            </div>

            {/* Holding the links on the nav */}
            <div className="md:order-last self-center md:justify-self-end space-x-5 md:ml-auto md:mr-5 md:text-lg flex flex-wrap">
                {/* Link to Github */}
                <a
                    href="https://github.com/Zunaty"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                    GitHub
                </a>

                {/* Link to LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/victorlperez/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                    LinkedIn
                </a>

                {/* LInk to Resume */}
                <a
                    href="https://docs.google.com/document/d/1UsKsOZwaKIe5Dg2pLueD0-d8S9xfY343ub4I1yExn_Y/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                    Resume
                </a>
            </div>
        </div>
    );
};

export default Nav;