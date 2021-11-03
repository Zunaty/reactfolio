import React from 'react';

function Footer() {
    return (
        <div className="bg-gradient-to-r from-gray-800 via-pink-800 to-red-400 flex flex-row flex-wrap text-white font-mono mt-10">
            <div className="m-auto text-lg my-5 flex space-x-4">
                <p>Check out these links for more information:</p>
                <a href="https://github.com/Zunaty" className="hover:text-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">GitHub</a>
                <a href="https://www.linkedin.com/in/victorlperez/" className="hover:text-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">linkedIn</a>
            </div>
            <div className="m-auto text-md my-5 space-x-4 flex">
                <p>This website was created using React and Tailwind CSS</p>
            </div>
        </div>
    );
};

export default Footer;