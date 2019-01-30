import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import './SocialIcons.css';

library.add(faGithub, faLinkedin, faIgloo);

class SocialIcons extends Component {
    render() {
        return (
            <div className="social-icons">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/charlescqian" className='fav-icon'><FontAwesomeIcon icon={['fab', 'github']} size='2x' className='fav-icon'/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/charlesqianubc/" className='fav-icon'><FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' className='fav-icon'/></a>
          </div>
        );

    }
}

export default SocialIcons;