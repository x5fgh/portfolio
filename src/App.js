// import logo from './R.JPG';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import React from 'react';

// import './assets/css/style.css';

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
//import { Skills } from "./ components/Skills";
// import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


function App() { 
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <Skills /> */}
      {/* <Projects />
      <Contact /> */}
      <Footer /> 
    </div>
  );
}

export default App;