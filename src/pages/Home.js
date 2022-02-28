import React from 'react';
import projectData from '../utils/projectData';

export default function Home(score) {
  const projectSlide = projectData.slice(0, 2);
  let slideIndex = 1;

  const showSlide = (n) => {
    let i;
  }

  const currentSlide = (num) => {
    showSlide(slideIndex = num)
  };

  const changeSlide = (num) => {
    showSlide(slideIndex += num)
  };

  return (
    <div className="container h-full overflow-hidden">
      <div className='container w-5/6 text-white font-mono text-4xl m-5 md:text-5xl md:m-20 '>
        Welcome to my portfolio!
      </div>

      <div className='container w-9/12 text-white font-mono m-5 md:m-20'>
        <p>
          Reduce the amount of clicks to see relevent information
        </p>
      </div>

      <div className='project-slide-container'>
        {projectSlide.map((project, index) => (
          <div className='project-slide' id={index}>
            <img src={project.photo} className='project-slide-img' alt={project.name} />
            <div className='project-slide-text'>{project.name}</div>
          </div>
        ))}

        <button className='project-slide-prev' onclick={changeSlide(-1)}>&#10094;</button>
        <button className='project-slide-next' onclick={changeSlide(1)}>&#10095;</button>
      </div>

      <div>
        <span className='project-slide-dot' onClick={currentSlide(1)}></span>
        <span className='project-slide-dot' onClick={currentSlide(2)}></span>
        <span className='project-slide-dot' onClick={currentSlide(3)}></span>
      </div>

    </div>
  )
};