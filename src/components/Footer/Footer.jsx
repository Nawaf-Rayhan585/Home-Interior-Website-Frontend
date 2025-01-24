import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
       <>
    <div class="footer-footer">
        <div class="footer-row">
          <div class="footer-col">
            <h4>Info</h4>
            <ul class="links">
              <li className='li-footer'><a href="#">About Us</a></li>
              <li className='li-footer'><a href="#">Compressions</a></li>
              <li className='li-footer'><a href="#">Customers</a></li>
              <li className='li-footer'><a href="#">Service</a></li>
              <li className='li-footer'><a href="#">Collection</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Explore</h4>
            <ul class="links">
              <li className='li-footer'><a href="#">Free Designs</a></li>
              <li className='li-footer'><a href="#">Latest Designs</a></li>
              <li className='li-footer'><a href="#">Themes</a></li>
              <li className='li-footer'><a href="#">Popular Designs</a></li>
              <li className='li-footer'><a href="#">Art Skills</a></li>
              <li className='li-footer'><a href="#">New Uploads</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Legal</h4>
            <ul class="links">
              <li className='li-footer'><a href="#">Customer Agreement</a></li>
              <li className='li-footer'><a href="#">Privacy Policy</a></li>
              <li className='li-footer'><a href="#">GDPR</a></li>
              <li className='li-footer'><a href="#">Security</a></li>
              <li className='li-footer'><a href="#">Testimonials</a></li>
              <li className='li-footer'><a href="#">Media Kit</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Newsletter</h4>
            <h5 className='footer-text'>
              Subscribe to our newsletter for a weekly dose
              of news, updates, helpful tips, and
              exclusive offers.
            </h5>
            <form action="#">
              <input type="text" placeholder="Your email" required/ >
              <button className='footer-btn' type="submit">SUBSCRIBE</button>
            </form>
            <div class="icons">

            </div>
          </div>
        </div>
      </div>
       </>
    );
}

export default Footer;
