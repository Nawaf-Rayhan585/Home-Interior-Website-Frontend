import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import HowItWorks from './components/HowItWorks/HowItWorks';
import WhatYouGet from './components/WhatYouGet/WhatYouGet';
import BannerReview from './components/BannerReview/BannerReview';
import Colaboration from './components/Colaboration/Colaboration';
import Slider from './components/Slider/Slider';
import Review from './components/Review/Review';
import Features from './components/Features/Features';
import PlanSchedule from './components/PlanSchedule/PlanSchedule';
import TrustedBy from './components/TrustedBy/TrustedBy';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <HowItWorks></HowItWorks>
      <WhatYouGet></WhatYouGet>
      <BannerReview></BannerReview>
      <Colaboration></Colaboration>
      <Slider></Slider>
      <Review></Review>
      <Features></Features>
      <PlanSchedule></PlanSchedule>
      <TrustedBy></TrustedBy>
      <Footer></Footer>
    </>
  );
}

export default App;

