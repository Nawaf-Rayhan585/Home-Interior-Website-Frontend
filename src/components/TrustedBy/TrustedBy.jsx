import React from 'react';
import './TrustedBy.css'
import brands from './assets/full.png'
const TrustedBy = () => {
    return (
        <div className='featuredby-container'>
            <h1 className='featuredby-heading-1'>Featured & Trusted By</h1>
            <div className="trusted-brand">
                <img className='brand-img' src={brands} alt="" />
            </div>
        </div>
    );
}

export default TrustedBy;
