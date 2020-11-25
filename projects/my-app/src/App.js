import React from 'react';
import Description from './components/Description/Description';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Service from './components/Service/Service';
import Standart from './components/Standart/Standart';

function App() {
  return (
    <div>
      <Navbar />
      <Description />
      <Standart />
      <Service />
      <Projects />
    </div>
  );
}

export default App;
