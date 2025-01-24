import React from 'react';
import './PlanSchedule.css'

const PlanSchedule = () => {
    return (
        <div className="plan-main">
            <div className="row-plan">
            <div className="imgWrapper">
                <img className='img-plan' src="https://media.istockphoto.com/id/1357529933/photo/digitally-generated-image-of-a-fully-furnished-living-room.jpg?s=612x612&w=0&k=20&c=wv2lkL2oV9HcZKzXtvxDvRO2FKU9o209ULVWxI3RaOY=" alt="img" />
            </div>
            <div className="contentWrapper">
                <div className="content">
                    <span className="textWrapper">
                    <span></span><h2 className="plan-header-2">Think you can't afford beautiful interior design?
                       Think again.</h2>
                    </span>
                    <br />
                    <button className='btn-plan'>Schedule A Consultation</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default PlanSchedule;
