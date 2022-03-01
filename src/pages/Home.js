import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import projectData from '../utils/projectData';

const Home = (props) => (

  <ReactFullpage
    //fullpage options
    licenseKey={'8F291959-62264E78-91600B4E-13763274'}
    scrollingSpeed={1000} /* Options here */

    render={({ state, fullpageApi }) => {
      const {
        setProjectsSelect
      } = props;

      // Grabbing just the first three projects from my database
      const featuredProjects = projectData.slice(0, 3);


      return (
        <ReactFullpage.Wrapper>

          {/* Welcome Section */}
          <div className='section text-white font-mono'>
            <div className='container w-5/6 flex flex-col mx-5 space-y-10 md:space-y-6'>
              <h1 className='text-3xl md:text-5xl lg:text-7xl self-center'>
                {`I'm a {software engineer}`}
              </h1>
              <h2 className='text-lg md:text-2xl lg:text-4xl self-center'>
                {`With experience in [full stack, &, QA]`}
              </h2>
            </div>

            {/* Arrow pointing down */}
            <div className='container flex flex-col absolute bottom-5'>
              <button className='self-center' onClick={() => fullpageApi.moveSectionDown()}>
                <span className='arrow arrowDown animate-pulse'></span>
              </button>
            </div>
          </div>

          {/* About me Section */}
          <div className='section text-white font-mono'>
            <div className='container flex flex-col mx-5 space-y-10 md:space-y-6'>
              <h1 className='text-3xl lg:text-5xl absolute top-28 md:top-24'>
                {'vlp.aboutMe'}
              </h1>

              <p className='text-base md:text-lg'>
                I'm currently looking to expand my skills and further my career in front end, back end, or full stack
                <br />
                I combine my experience from aviation as pilot in command, working in a restuarant through most roles, and high ranking gaming environments to bring my code to life
              </p>
            </div>

            {/* Arrow pointing down */}
            <div className='container flex flex-col absolute bottom-5'>
              <button className='self-center' onClick={() => fullpageApi.moveSectionDown()}>
                <span className='arrow arrowDown animate-pulse'></span>
              </button>
            </div>
          </div>

          {/* Projects Section */}
          <div className='section text-white font-mono'>
            <div className='container flex flex-col ml-5'>
              <h1 className='text-3xl lg:text-5xl absolute top-28 md:top-24'>
                {'vlp.projects'}
              </h1>
              <h2 className='text-base absolute top-44'>Click the link to the right for more than just my featured works, also check out my github!</h2>

              <button 
                className='text-lg lg:text-3xl absolute top-28 md:top-24 right-5 hover:text-pink-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 z-10'
                onClick={() => {setProjectsSelect(true);}}
              >
                Projects
              </button>
            </div>
              {featuredProjects.map((project, index) => (
                <div className='slide'>
                  <div className='container mx-auto mt-20 md:mt-20 w-5/6 md:border-4 md:rounded-md h-1/2 md:grid md:grid-cols-2 overflow-hidden flex md:flex-none' id={index}>
                    {/* Left side */}
                    <div className='invisible order-last md:order-none w-0 md:w-auto md:visible '>
                      <img src={project.photo} alt={project.photoAlt}></img>
                    </div>

                    {/* Right side */}
                    <div className='mx-5'>
                      <h1 className='text-2xl my-3'>{project.name}</h1>
                      <p>{project.des}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Home;