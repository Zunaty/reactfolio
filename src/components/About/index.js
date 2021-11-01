import React from 'react';
import selfPic from '../../assets/images/self.jpg'

function About() {
    return (
        <div className="container mx-auto grid grid-cols-3 gap-5 h-screen my-5">
            <div className="container">
                <img src={selfPic} className="rounded-lg" alt="Victor Perez"></img>
            </div>

            <div className="">
                <p>
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

            <div>
                <ul>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>CSS Frameworks</li>
                    <li>API Manipulation</li>
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