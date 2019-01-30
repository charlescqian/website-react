import React, { Component } from 'react';
import logo from "../logo.svg";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import './Navbar.css';

class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <nav className="navbar" id="navbar" style={{display: 'flex', justifyContent: 'flex-end'}}>
                <div className="navbar-content">
                    <img
                        src={logo}
                        className="navbar-logo"
                        alt="Logo"
                        onClick={this.scrollToTop}
                    />
                    <ul className="navbar-items">
                        <li className="navbar-item">
                            <Link
                                activeClass="active"
                                to="about-page"
                                spy={true}
                                smooth={true}
                                offset={-40}
                                duration={500}
                            >
                                About
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link
                                activeClass="active"
                                to="projects-page"
                                spy={true}
                                smooth={true}
                                offset={-40}
                                duration={500}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link
                                activeClass="active"
                                to="hobbies-page"
                                spy={true}
                                smooth={true}
                                offset={-40}
                                duration={500}
                            >
                                Hobbies
                            </Link> 
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navbar;