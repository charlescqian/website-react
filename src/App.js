import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import HobbiesPage from "./Pages/HobbiesPage/HobbiesPage";
import Navbar from "./Components/Navbar";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LandingPage id="landing-page"/>
        <AboutPage id="about-page"/>
        <ProjectsPage id="projects-page"/>
        <HobbiesPage id="hobbies-page"/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hey, it's Charles Qian. Welcome to my website!
          </p>
          <div className="social-icons">
            <a target="_blank" href="https://github.com/charlescqian" className="icon fav-github">GitHub Icon</a>
            <a target="_blank" href="https://www.linkedin.com/in/charlesqianubc/" className="icon fav-linkedin">LinkedIn Icon</a>
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
