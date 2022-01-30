import React, { useState } from 'react';
import "tailwindcss/tailwind.css";

// Importing components and pages
import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  const [aboutSelect, setAboutSelect] = useState(false);
  const [projectsSelect, setProjectsSelect] = useState(false);

  return (
    <div className="flex flex-col font-mono w-full">
      <header>
        <Nav
          aboutSelect={aboutSelect}
          setAboutSelect={setAboutSelect}
          projectsSelect={projectsSelect}
          setProjectsSelect={setProjectsSelect}
        >
        </Nav>
      </header>
      
      <main className="bg-gray-700">
        {projectsSelect ? ( 
          <Projects></Projects>
        ) : aboutSelect ? (
          <About></About>
        ) : (
          <Home></Home>
        )}
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;