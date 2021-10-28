import React from 'react';
import "tailwindcss/tailwind.css";

import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <header>
        <Nav></Nav>
      </header>
      
      <main>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </main>

      <footer>
        
      </footer>
    </div>
  );
}

export default App;