import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import projectData from '../utils/projectData';

const Home = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={'8F291959-62264E78-91600B4E-13763274'}
    scrollingSpeed={1000} /* Options here */

    render={({ state, fullpageApi }) => {
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
              <h1 className='text-3xl lg:text-5xl absolute top-24'>
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
              <h1 className='text-3xl lg:text-5xl absolute top-24'>
                {'vlp.projects'}
              </h1>

              {projectData.map((project, index) => (
                <div className='slide self-center'>
                  <div className='container'>
                    <h1>{project.name}</h1>
                    <img src={project.type} alt={project.photoAlt}></img>
                    <p>{project.des}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Home;