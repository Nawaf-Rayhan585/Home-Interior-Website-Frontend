import React from 'react';
import './HowItWorks.css'
import video from '../../assets/video.png'

const HowItWorks = () => {
    return (
        <div className='HIW-Container'>
            <h1 className='heading-HIW'>How it Works: Our Easy Process</h1>
            <p className='HIW-p'>Explore the signature aesthetics of renowned online interior designers.</p>
            <div className="video-container">
                <img src={video} alt="" />
            </div>
        </div>
    );
}

export default HowItWorks;
