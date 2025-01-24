import React from "react";
import { LuSofa } from "react-icons/lu";
import { GoLightBulb } from "react-icons/go";
import { PiPhoneCall } from "react-icons/pi";
import { FiBox } from "react-icons/fi";
import { LuScale3D } from "react-icons/lu";
import './WhatYouGet.css'
const WhatYouGet = () => {
  return (
    <div className="whatyouget-container">
      <h1 className="heading-HIW">
        Work with the Finest Online Interior Design Talent
      </h1>
      <p className="p-WYG">Get Personalized Interior Design Help from Award-Winning Experts</p>




      <div class="container-icon-main">
        
        <div class="icon-container">
          <LuSofa className="img" />
          <div class="text">Up to 45% off at 350+ furniture stores</div>
        </div>
        <div class="icon-container">
          <GoLightBulb className="img" /> 
          <div class="text">Concepts from multiple top designers</div>
        </div>
        <div class="icon-container">
          <PiPhoneCall className="img"/>
          <div class="text">One-on-one interior design consultation</div>
        </div>
        <div class="icon-container">
          <FiBox className="img"/>
          <div class="text">3D model of your space</div>
        </div>
        <div class="icon-container">
          <LuScale3D className="img"/>
          <div class="text">Color palette & floor plan</div>
        </div>

      </div>
    </div>
  );
};

export default WhatYouGet;
