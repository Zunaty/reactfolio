import React, { useState } from 'react';

import jobTrackerPic from '../../assets/images/job-tracker-preview.png';
import airQualityPic from '../../assets/images/air-quality-preview.png';
import workDayPic from '../../assets/images/workday-planner.png';
import weatherAppPic from '../../assets/images/weatherApp.png';
import legoPic from '../../assets/images/lego.png';
import passGenPic from '../../assets/images/pass-gen.png';


function Projects() {
    const [projects] = useState([
        {
            name: "Job Tracker",
            github: "https://github.com/Zunaty/Looking-For-A-Job",
            link:"https://vjob-tracker.herokuapp.com/",
            photo: jobTrackerPic,
            cssPhoto: "jobTrackerImage",
            photoAlt: "Job Tracker Website",
            des: "A full stack application that let's you sign up, login, and track jobs through your dashboard. As team lead for this project I distributed work load across the team and focused on the back end for my part (Models and Routes).",
            type: "Group Project",                                                                                      
            tech: ["SQL", "Bulma CSS", "MVC", "Express.js", "Node.js", "bcrypt", "Javascript", "HTML"]
        },
        {
            name: "Air Quality",
            github: "https://github.com/Zunaty/air-quality",
            link: "https://zunaty.github.io/air-quality/",
            photo: airQualityPic,
            cssPhoto: "airQualityImage",
            photoAlt: "Air Quality Website",
            des: "This front end web app allows for you to check your current air quality in your area. For this app I performed the role of DevOps, maintaining the the github repo and insuring all updates were seemlessly pushed. My other focus for this app was to ensure the front end script properly talked with 3rd party APIs.",
            type: "Group Project",
            tech: ["Javascript", "Bulma CSS", "3rd Party API", "HTML"]
        },
        {
            name: "Workday Planner",
            github: "https://github.com/Zunaty/workday-planner",
            link: "https://zunaty.github.io/workday-planner/",
            photo: workDayPic,
            cssPhoto: "workdayImage",
            photoAlt: "Work Day Planner",
            des: "An app to keep track of things you have to do for the day.",
            type: "Solo Project",
            tech: ["HTML", "Javascript", "CSS"]
        },
        {
            name: "Weather App",
            github: "https://github.com/Zunaty/weather-app",
            link: "https://zunaty.github.io/weather-app/",
            photo: weatherAppPic,
            cssPhoto: "weatherAppImage",
            photoAlt: "Weather App",
            des: "App that pulls the weather for entered location.",
            type: "Solo Project",
            tech: ["HTML", "Javascript"]
        },
        {
            name: "Password Generator",
            github: "https://github.com/Zunaty/Pass-Gen",
            link: "https://zunaty.github.io/Pass-Gen/",
            photo: passGenPic,
            cssPhoto: "passGenImage",
            photoAlt: "Password Generator",
            des: "This app creates a random password based on your answers to the provided questions.",
            type: "Solo Project",
            tech: ["HTML", "Javascript"]
        },
        {
            name: "Lego Site Automation Test",
            github: "https://github.com/Zunaty/soloLego",
            link: null,
            photo: legoPic,
            cssPhoto: "legoTestImage",
            photoAlt: "Code of the Lego website automation",
            des: "This was a project done to check links and ensure features worked for the lego site. Done for my solo project at Dev Mountain for their Quality Assurance program.",
            type: "Solo Project",
            tech: ["Javascript", "Nightwatch.js", "Selenium"]
        }
    ]);

    return (
        <div className="container mx-auto my-5">

            {/* Setting up grid to hold cards */}
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

                {/* Going through the array of objects and creating a card for each */}
                {projects.map((project) => (
                    <>
                        {/* Background of project card */}
                        <div className={`container rounded-lg my-max col-span-2 max-w-full flex flex-col ${project.cssPhoto}`}>

                            <div className="opacity-0 hover:opacity-100 bg-gradient-to-r from-gray-800 via-pink-900 to-red-400 text-white rounded-lg h-full">
                                {/* Title box for project Card */}
                                <div className="ml-5 mr-2 divide-y divide-pink-700 h-16">
                                    <p className="text-3xl text-center ">{project.name}</p>
                                    <p className="text-md text-center">({project.type})</p>
                                </div>

                                {/* Project description */}
                                <div className="my-2 h-48 overflow-y-auto ">
                                    <p className="overflow-y-auto">{project.des}</p>
                                </div>

                                {/* Technologies used section */}
                                <div className="my-5 h-48 overflow-y-auto divide-y divide-pink-700">
                                    <p className="text-xl ml-2">Technologies Used:</p>
                                    <ul className="ml-2 ">
                                        {/* Pulling out all the technologies from the array and making them list items */}
                                        {project.tech.map((techItem) => (
                                            <>
                                                <li>{techItem}</li>
                                            </>
                                        ))}
                                    </ul>
                                </div>

                                {/* Buttons at bottom */}
                                <div className="flex justify-end text-white space-x-3 m-2">
                                    <a href={project.github} className="rounded-lg ring-2 ring-gray-700 ring-offset-2 ring-offset-red-400 bg-pink-800 hover:bg-gray-800 shadow-md p-2">GitHub</a>
                                    <a href={project.link} className="rounded-lg ring-2 ring-gray-700 ring-offset-2 ring-offset-red-400 bg-pink-800 hover:bg-gray-800 shadow-md p-2">Site Link</a>
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