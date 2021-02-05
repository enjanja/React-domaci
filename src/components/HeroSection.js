import React from 'react';
import { Button } from './Button';
import '../App.css';
//rfce - creates func & imports react
import './HeroSection.css';
function HeroSection() {
    return (
        <div className="hero-container">
            {/* import video  */}
            <video src="/video/video-2.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What R U waiting 4</p>
            <div className="hero-btns">
                <Button 
                    className="btns" 
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    GET STARTED
                </Button>
                <Button 
                    className="btns" 
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                >
                    WATCH TRAILER <i clasName="far fa-play-circle" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
