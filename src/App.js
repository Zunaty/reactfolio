import React, { useState } from 'react';
import "tailwindcss/tailwind.css";

import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  const [aboutSelect, setAboutSelect] = useState(false);
  const [projectsSelect, setProjectsSelect] = useState(false);
  const [contactSelect, setContactSelect] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <header className="h-30">
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
      
      <main className="bg-gray-500 mb-auto">
        {projectsSelect ? ( 
          <Projects></Projects>
        ) : contactSelect ?(
          <Contact></Contact>
        ) : (
          <About></About>
        )}
      </main>

      <footer className="h-10">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;