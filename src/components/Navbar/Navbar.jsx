import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div class="nav">
        <p class="centered-text">New Year, New You, <b>Flash Sale! $170 Off</b> Your Room Design. Ends Soon! <b>Launch Today to Claim!</b></p>
    </div>
      <nav>
        <div class="wrapper">
          <div class="logo">
            <a href="#">Dwell.</a>
          </div>
          <ul class="nav-links">
            <label for="close-btn" class="btn close-btn">
              <i class="hamburgur icon"></i>
            </label>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
            <a href="#" class="desktop-item">Style Quiz</a>
            </li>
            <li>
              <a href="#" class="desktop-item">
                Blog
              </a>
            </li>
            <li>
              <a href="#" class="desktop-item">
                Gift Cards
              </a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
        </ul>
          <button class="nav-btn">
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
