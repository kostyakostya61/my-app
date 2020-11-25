import React from 'react';
import Description from './components/Description/Description';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Service from './components/Service/Service';
import Standart from './components/Standart/Standart';
import Work from './components/Work/Work';

function App() {
  return (
    <div>
      <Navbar />
      <Description />
      <Standart />
      <Service />
      <Projects />
      <Work />
    </div>
  );
}

export default App;
