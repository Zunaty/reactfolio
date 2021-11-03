import React, { useState } from 'react';

function Projects() {
    const [projects] = useState([
        {
            name: "Job Tracker",
            github: "https://github.com/Zunaty/Looking-For-A-Job",
            link:"https://vjob-tracker.herokuapp.com/",
            photo: "jobTracker",
            photoAlt: "Job Tracker Website",
            des: "A full stack application that let's you sign up, login, and track jobs through your dashboard. As team lead for this project I distributed work load across the team and focused on the back end for my part (Models and Routes).",
            type: "Group Project",                                                                                      
            tech: ["SQL", "Bulma CSS", "MVC", "Express.js", "Node.js", "bcrypt", "Javascript"]
        },
        {
            name: "Air Quality",
            github: "https://github.com/Zunaty/air-quality",
            link: "https://zunaty.github.io/air-quality/",
            photo: "airQuality",
            photoAlt: "Air Quality Website",
            des: "This front end web app allows for you to check your current air quality in your area. For this app I performed the role of DevOps, maintaining the the github repo and insuring all updates were seemlessly pushed. My other focus for this app was to ensure the front end script properly talked with 3rd party APIs.",
            type: "Group Project",
            tech: ["Javascript", "Bulma CSS", "3rd Party API"]
        },
        {
            name: "",
            github: "",
            link: "",
            photo: "",
            photoAlt: "",
            des: "",
            type: "",
            tech: []
        },
        {
            name: "",
            github: "",
            link: "",
            photo: "",
            photoAlt: "",
            des: "",
            type: "",
            tech: []
        },
        {
            name: "",
            github: "",
            link: "",
            photo: "",
            photoAlt: "",
            des: "",
            type: "",
            tech: []
        },
        {
            name: "",
            github: "",
            link: "",
            photo: "",
            photoAlt: "",
            des: "",
            type: "",
            tech: []
        }
    ]);

    return (
        <div className="container mx-auto h-screen mt-10 mb-28 font-mono sm:overflow-hidden">
            <div className="grid grid-cols-4 gap-5">
                {projects.map((project) => (
                    <>
                        
                        <div className="rounded-lg bg-gray-300 my-max col-span-2  h-full max-w-full max-h-96 flex flex-row">
                            <div className="flex">
                                <img src={project.photo} className="rounded-lg max-h-96" alt={project.photoAlt}></img>
                            </div>
                            <div className="container divide-y divide-pink-700">
                                <p className="text-3xl text-center">{project.name}</p>
                                <p className="text-lg">{project.type}</p>

                                <a href={project.github} className="hover:text-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">GitHub</a>
                                <a href={project.link} className="hover:text-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Site Link</a>
                            </div>
                            
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Projects;