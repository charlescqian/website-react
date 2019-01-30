import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import HobbiesPage from "./Pages/HobbiesPage/HobbiesPage";
import Navbar from "./Components/Navbar";
import SocialIcons from "./Components/SocialIcons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LandingPage id="landing-page"/>
        <AboutPage id="about-page"/>
        <ProjectsPage id="projects-page"/>
        <HobbiesPage id="hobbies-page"/>
        
      </div>
    );
  }
}

export default App;
