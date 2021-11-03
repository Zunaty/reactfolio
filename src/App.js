import React, { useState } from 'react';
import "tailwindcss/tailwind.css";

import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  const [aboutSelect, setAboutSelect] = useState(true);
  const [projectsSelect, setProjectsSelect] = useState(false);
  const [contactSelect, setContactSelect] = useState(false);

  return (
    <div className="flex flex-col h-full font-mono static w-full">
      <header className="relative top-0 w-full">
        <Nav
          aboutSelect={aboutSelect}
          setAboutSelect={setAboutSelect}
          projectsSelect={projectsSelect}
          setProjectsSelect={setProjectsSelect}
          contactSelect={contactSelect}
          setContactSelect={setContactSelect}
        >
        </Nav>
      </header>
      
      <main className="bg-gray-500 h-full w-full">
        {projectsSelect ? ( 
          <Projects></Projects>
        ) : contactSelect ?(
          <Contact></Contact>
        ) : (
          <About></About>
        )}
      </main>

      <footer className="relative bottom-0 w-full bg-gray-500">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;