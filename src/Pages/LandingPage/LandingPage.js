import React, { Component } from 'react';
import SocialIcons from '../../Components/SocialIcons';


class LandingPage extends Component {
    render() {
        return( 
            <div className="landing-page">
                <h1>
                    Hey, I'm Charles. 
                </h1>
                <p1>
                    Welcome to my website!
                </p1>
                <SocialIcons />
            </div>
        );
    }
}

export default LandingPage;