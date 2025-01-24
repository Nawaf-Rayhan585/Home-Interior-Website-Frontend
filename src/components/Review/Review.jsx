import React from "react";
import avatar1 from "./assets/avatar12.jpg";
import avatar3 from "./assets/avatar14.jpg";
import avatar4 from "./assets/avatar15.jpg";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

import "./Review.css";

const Review = () => {
  return (
    <section className="testimonial-review">
      <figure class="snip1157">
        <blockquote>
        From concept to completion, Dwell was a pleasure to work with. The final result is stunning. Thank you for creating a beautiful and welcoming home.
          <div class="arrow"></div>
        </blockquote>
        <img
          src={avatar1}
          alt="sq-sample3"
        />
        <div class="author">
          <h5>
            Ino Yamanaka
          </h5><span><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/></span>
        </div>
      </figure>
      <figure class="snip1157 hover">
        <blockquote>
        Impressed with the professionalism and creativity of Dwell. They exceeded my expectations. The attention to detail was amazing. Will definitely use them again!
          <div class="arrow"></div>
        </blockquote>
        <img
          src={avatar4}
          alt="sq-sample27"
        />
        <div class="author">
          <h5>
            Chris Powell
          </h5><span><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/><FaStarHalfAlt className="star"/></span>
        </div>
      </figure>
      <figure class="snip1157">
        <blockquote>
        Absolutely loved the Dwell transformation! They brought my vision to life. Highly recommend for anyone seeking a stylish and functional space.
          <div class="arrow"></div>
        </blockquote>
        <img
          src={avatar3}
          alt="sq-sample17"
        />
        <div class="author">
          <h5>
            Amely Jones
          </h5><span><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/><FaStar className="star"/><FaRegStar  className="star"/></span>
        </div>
      </figure>
    </section>
  );
};

export default Review;
