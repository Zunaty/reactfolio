import React from 'react';

export default function Home(score) {

  return (
    <div className="container h-full overflow-hidden">
      <div className='container w-5/6 text-white font-mono text-4xl m-5 md:text-5xl md:m-20 '>
        Welcome to my portfolio!
      </div>

      <div className='container w-9/12 text-white font-mono m-5 md:m-20'>
        <p>
          Below is a simple timeline, use the buttons above to get to know more about me or my projects!
          <br />
          Contact me with the link provided at the bottom of the page.
          <br />
          Currently working on adding some games, those will come soon.
        </p>
      </div>

      {/* Simple Timeline */}
      <div className='timeline'>
        <div className='timelineContainer tcLeft'>
          <div className='timelineContent'>
            Though a little new to the industry, i've always had an interest in creating applications, webpages, and games.
          </div>
        </div>

        <div className='timelineContainer tcRight'>
          <div className='timelineContent'>
            The first computer game I played was Delta Force in 1998. 
          </div>
        </div>

        <div className='timelineContainer tcLeft'>
          <div className='timelineContent'>
            Since the early 2000s i've taken built and taken apart many computers.
          </div>
        </div>

        <div className='timelineContainer tcLeft'>
          <div className='timelineContent'>
            In high school I began to pick up HTML, then took classes for Java, eventually making my own asteroids game with friend.
          </div>
        </div>

        <div className='timelineContainer tcRight'>
          <div className='timelineContent'>
            During college I switched to aviation, because I'd always wanted to learn to fly an airplane, but still took classes such as web design. 
          </div>
        </div>

        <div className='timelineContainer tcLeft'>
          <div className='timelineContent'>
            Aviation quickly became very costly though, and I would stop going to college to focus on my income. Bussing at a restuarant and over the next few years working
             my way through different positions such as catering, and barbacking.
          </div>
        </div>

        <div className='timelineContainer tcRight'>
          <div className='timelineContent'>
            In 2019 I took my first steps back into the software world. Taking a class for Quality Assurance at DevMountain. 
          </div>
        </div>

        <div className='timelineContainer tcLeft'>
          <div className='timelineContent'>
            Unfortunately the pandemic happened shortly after and put the job hunt on hold for a bit, then in 2021 I decided to take the Full Stack Web Development class at the University of Utah.
          </div>
        </div>

        <div className='timelineContainer tcLeft'>
          <div className='timelineContent'>
            Currently looking for any opportunity to get my foot in the door at a software company. Creating front end or back end solutions.
          </div>
        </div>

      </div>
    </div>
  )
};