import React from 'react';

function Footer() {
    return (
        <div className="bg-gradient-to-r from-gray-800 via-pink-800 to-red-400 flex flex-col flex-wrap text-white font-mono">
            
            {/* Link to Github and LinkedIn with hover effects */}
            <div className="m-auto md:text-lg text-center my-3 md:flex space-x-4">
                <p>Check out these links for more information:</p>
                <a href="https://github.com/Zunaty" target="_blank" rel="noreferrer" className="hover:text-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">GitHub</a>
                <a href="https://www.linkedin.com/in/victorlperez/" target="_blank" rel="noreferrer" className="hover:text-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">LinkedIn</a>
                <a href="https://docs.google.com/document/d/1UsKsOZwaKIe5Dg2pLueD0-d8S9xfY343ub4I1yExn_Y/edit?usp=sharing" target="_blank" rel="noreferrer" className="hover:text-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Resume</a>
            </div>

            {/* Credits to React and Tailwind */}
            <div className="m-auto md:text-md text-center my-5 space-x-4">
                <p>This website was created using</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="hover:text-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">ReactJS</a>
                    <p> and </p>
                    <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="hover:text-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Tailwindcss</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;