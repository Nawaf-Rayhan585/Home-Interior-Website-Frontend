import React from "react";
import "./Colaboration.css";
import Hevenly from './assets/hevenly.png'
import AllModern from './assets/allmodern.webp'
import Hatil from './assets/hatil.png'
import Vogue from './assets/vogue.png'
import Article from './assets/article.webp'
import full from './assets/full-brand.png'

const Colaboration = () => {
  return (
    <>
      <div className="collaboration-container">
            <h1 className="heading-C">Worked With Dwell.</h1>
            <p className="text-collaboration">Worked with the Finest Online Interior Design Talent</p>
            <div className="worked-with">
                <img className="img-brand" src={full} alt="" />
            </div>
      </div>
    </>
  );
};

export default Colaboration;
