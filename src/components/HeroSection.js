import React from 'react';
import { Button } from './Button';
import '../App.css';
//rfce - creates func & imports react
import './HeroSection.css';
function HeroSection() {
    return (
        <div className="hero-container">
            {/* import video  */}
            <video src="/video/video-3.mp4" autoPlay loop muted />
            <h1>OPEN YOUR EYES</h1>
            <p>Become one with The Creator</p>
            <div className="hero-btns">
                <Button 
                    className="btns" 
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    CONTACT US
                </Button>
                <Button 
                    className="btns" 
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                >
                    Memento mori
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
