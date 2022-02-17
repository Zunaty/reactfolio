import React from 'react';

import projectData from '../utils/projectData'



function Projects(score) {
    const projects = projectData; 

    return (
        <div className="mx-5 sm:mx-10 lg:mx-20 xl:mx-36 my-5">

            {/* Setting up grid to hold cards */}
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

                {/* Going through the array of objects and creating a card for each */}
                {projects.map((project, index) => (
                    <>
                        {/* Background of project card */}
                        <div id={index} className={`container rounded-lg my-max col-span-2 max-w-full flex flex-col ${project.cssPhoto}`}>

                            <div className=" opacity-0 hover:opacity-100 bg-gradient-to-r from-gray-800 via-pink-900 text-white rounded-lg h-full">
                                {/* Title box for project Card */}
                                <div className="ml-5 mr-2 divide-y divide-pink-700 h-16">
                                    <p className="text-3xl text-center ">{project.name}</p>
                                    <p className="text-md text-center">({project.type})</p>
                                </div>

                                {/* Project description */}
                                <div className="my-2 h-48 w-2/3 overflow-y-auto">
                                    <p className="overflow-y-auto ml-2">{project.des}</p>
                                </div>

                                {/* Technologies used section */}
                                <div className="my-5 h-48 w-2/3 overflow-y-auto divide-y divide-pink-700">
                                    <p className="text-xl ml-2">Technologies Used:</p>
                                    <ul className="ml-2">
                                        {/* Pulling out all the technologies from the array and making them list items */}
                                        {project.tech.map((techItem, techIndex) => (
                                            <li id={techIndex}>{techItem}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Buttons at bottom */}
                                <div className="flex justify-end text-white space-x-3 m-2">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="rounded-lg ring-2 ring-gray-700 ring-offset-2 ring-offset-red-400 bg-pink-800 hover:bg-gray-800 shadow-md p-2">GitHub</a>
                                    <a href={project.link} target="_blank" rel="noreferrer" className="rounded-lg ring-2 ring-gray-700 ring-offset-2 ring-offset-red-400 bg-pink-800 hover:bg-gray-800 shadow-md p-2">Site Link</a>
                                </div>  
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Projects;