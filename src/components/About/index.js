import React from 'react';
import selfPic from '../../assets/images/self.jpg'

function About() {
    return (
        <div className="container mx-auto grid md:grid-cols-3 gap-5 bg-gray-500 h-full w-full mt-10 mb-15 font-mono sm:overflow-hidden">
            
            {/* Image of me that sits to left on large screens, on top on small screens */}
            <div className="container col-span-2 md:col-span-1 md:row-span-2 h-2/3 max-h-96">
                <img src={selfPic} className="rounded-lg max-h-96 mx-auto md:mx-0 md:ml-auto " alt="Victor Perez"></img>
            </div>

            {/* About me section with an about paragraph */}
            <div className="rounded-lg bg-gray-300 my-max col-span-2 divide-y divide-pink-700 h-full max-w-lg max-h-96 overflow-y-auto mx-auto md:mx-0">
                <p className="text-3xl text-center">About Me</p>
                <p className="m-3">
                    I've done a little bit of everything. I learned to fly single engine airplanes, coded with Java in college, and
                    worked almost every position in a restaurant. And there is still much to learn and do. Most recently picking up Quality 
                    Assurance Software skills and Full-Stack Web Development for my toolkit.

                    <br/>
                    <br/>

                    Things I enjoy to do in my free time include gaming, golfing, camping, and much more.
                    I've been a raid and guild leader for some of our 10 and 20 man groups for World of Warcraft.
                    I've participated in multiple high ranking environments, where teamwork and group cohesion is key for success.   
                </p>
            </div>

            {/* Skills and technologies known section */}
            <div className="rounded-lg bg-gray-300 col-span-2 overflow-y-auto max-h-72 divide-y divide-pink-700 max-w-lg w-full mb-20 mx-auto md:mx-0">
                <p className="text-3xl text-center">Skills & Technologies</p>
                <ul className="m-3 text-lg">
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>CSS Frameworks</li>
                    <li>API Manipulation</li>
                    <li>SQL</li>
                    <li>NoSQL (Mongo)</li>
                    <li>GitHub</li>
                    <li>Selenium</li>
                    <li>Nightwatch.js</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Manual Testing (QA)</li>
                    <li>Automated Testing (QA)</li>
                    <li>Nightwatch.js</li>
                    <li>Photoshop</li>
                    <li>Private Pilot (VFR)</li>
                    <li>Instrument Pilot (IFR)</li>
                </ul>
            </div>
        </div>
    );
};

export default About;