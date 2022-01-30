import jobTrackerPic from '../assets/images/job-tracker-preview.png';
import airQualityPic from '../assets/images/air-quality-preview.png';
import workDayPic from '../assets/images/workday-planner.png';
import weatherAppPic from '../assets/images/weatherApp.png';
import legoPic from '../assets/images/lego.png';
import passGenPic from '../assets/images/pass-gen.png';
import dataVersePic from '../assets/images/dataverse.png';

const projectData = [
    {
        name: "DataVerse",
        github: "https://github.com/Zunaty/dataverse",
        link: "https://gentle-temple-58806.herokuapp.com/",
        photo: dataVersePic,
        cssPhoto: "dataVerseImage",
        photoAlt: "DataVerse App",
        des: "A scalable app for personal to small business which helps you track your current inventory. The app showcases ReactJS and it's many tools to create useful apps, which is enhanced by a NoSQL database. My responsibilities were front-end focused with some back-end, and ensuring merges, features, and pushes were efficient and continuous.",
        type: "Group Project",
        tech: ["ReactJS", "Javascript", "Express.js", "NodeJS", "HTML", "CSS", "MUI", "MongoDB"]
    },
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
];

export default projectData;