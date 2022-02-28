import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";

const Home = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={'8F291959-62264E78-91600B4E-13763274'}
    scrollingSpeed={1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section text-white font-mono">
            <div className='container w-5/6 flex flex-col ml-5 space-y-10 md:space-y-6'>
              <h1 className='text-7xl self-center'>I'm a software engineer</h1>
              <h2 className='text-4xl self-center'>With experience in full stack and QA</h2>
            </div>
            <div className='container flex flex-col absolute bottom-5'>
              <button className='self-center' onClick={() => fullpageApi.moveSectionDown()}>
                <span className='arrow arrowDown animate-pulse'></span>
              </button>
            </div>

          </div>
          <div className="section text-white font-mono">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Home;