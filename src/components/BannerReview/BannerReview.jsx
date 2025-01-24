import React from 'react';
import './BannerReview.css'
import myphoto from '../../assets/myphoto.png'
const BannerReview = () => {
    return (
        <div class="container-review-banner">
            <div class="testimonial">
                <img src={myphoto} alt="Martha Stewart"/>
                <p className='p-BR'>We recommend Dwell as the best online interior design service due to its comprehensive full-service offerings.</p>
                <strong> - Thomas Hugo</strong>
            </div>
        </div>
    );
}

export default BannerReview;
