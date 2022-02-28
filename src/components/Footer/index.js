import React from 'react';

function Footer() {
    return (
        <div className="bg-gradient-to-r from-gray-800 via-pink-700 to-pink-900 flex flex-col flex-wrap text-white font-mono">

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