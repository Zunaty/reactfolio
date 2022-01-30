import React from 'react';
import selfPic from '../assets/images/self.jpg'

function About() {
    return (
        <div className="container mx-auto grid md:grid-cols-3 gap-5 h-screen w-full my-5 overflow-hidden">

            {/* Image of me that sits to left on large screens, on top on small screens */}
            <div className="col-span-2 md:col-span-1 md:row-span-2 h-2/3 max-h-96">
                <img src={selfPic} className="rounded-lg max-h-96 mx-auto md:mx-0 md:ml-auto " alt="Victor Perez"></img>
            </div>

            {/* About me section with an about paragraph */}
            <div className="rounded-lg bg-gray-300 col-span-2 divide-y divide-pink-700 h-full max-w-lg max-h-96 overflow-y-auto mx-auto md:mx-0 md:ml-5">
                <p className="text-3xl text-center">About Me</p>
                <p className="m-3">

                    Seeking a software development role, experience in software and quality assurance
                    engineering along with flight operation time through Westminster College.
                    Certificate from University of Utah for full stack web development with technologies
                    such as Javascript, ReactJS, and NoSQL. Passionate about approaching programming challenges
                    from different angles and collaborating with others to create meaningful web applications.
                    My experience with flight ops has strengthened my leadership, problem solving, and teamwork
                    abilities for creating apps with a team, the most recent of which was an inventory app for small
                    businesses. Positioned well to provide unique perspectives on how end-users interact with websites
                    and software platforms by leveraging my background in aviation and computer sciences.

                    <br />
                    <br />


                    I've done a little bit of everything. I learned to fly single engine airplanes, coded with Java in college, and
                    worked almost every position in a restaurant. And there is still much to learn and do. Most recently picking up Quality
                    Assurance Software skills and Full-Stack Web Development for my toolkit.

                    <br />
                    <br />

                    Things I enjoy to do in my free time include gaming, golfing, camping, and much more.
                    I've been a raid and guild leader for some of our 10 and 20 man groups for World of Warcraft.
                    I've participated in multiple high ranking environments, where teamwork and group cohesion is key for success.
                </p>
            </div>

            {/* Skills and technologies known section */}
            <div className="rounded-lg bg-gray-300 col-span-2 overflow-y-auto max-h-96 divide-y divide-pink-700 w-full max-w-lg mx-auto md:mx-0 md:ml-5">
                <p className="text-3xl text-center">Skills & Technologies</p>
                <ul className="m-3 text-lg">
                    <li>Javascript</li>
                    <li>Java</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>C#</li>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>Nightwatch.js</li>
                    <li>API Manipulation</li>
                    <li>Restful API</li>
                    <li>SQL</li>
                    <li>NoSQL</li>
                    <li>MongoDB</li>
                    <li>Heroku</li>
                    <li>GitHub</li>
                    <li>Selenium</li>
                    <li>Manual Testing</li>
                    <li>Automated Testing</li>
                    <li>Agile Methodology</li>
                    <li>Object Oriented Programming (OOP)</li>
                    <li>Model View Controller (MVC)</li>
                    <li>Private Pilot (VFR)</li>
                    <li>Instrument Pilot (IFR)</li>
                </ul>
            </div>
        </div>
    );
};

export default About;