import React from 'react';
import '../styles.css';
import image1 from '../images/Mask group.png';
import image2 from '../images/fb.png';
import image3 from '../images/twitter.png';
import image4 from '../images/Vector.png'; // Add the Instagram image import

function Footer() {
  return (
    <footer className="footer bgfooter text-white mt-5">
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col">
            <img src={image1} alt="Logo" className="logo" />
          </div>
        </div>

        {/* Columns */}
        <div className="row mt-5 ms-5">
          <div className="col-md-4 col-sm-12 col-lg-2">
            <span className="d-block">Web3Makr</span>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-2">
            <span className="d-block">White paper</span>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-2">
            <span className="d-block">Services</span>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-2">
            <span className="d-block">Tool</span>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-2">
            <span className="d-block">Contact us</span>
          </div>
        </div>

        {/* Copyright text and social icons */}
        <div className="row mt-4">
          <div className="col-md-6">
            <span>Copyright 2022 &copy; Web3makr</span>
          </div>

          <div className="col-md-6 text-md-end mt-md-0 mt-3">
            <img src={image2} alt="Facebook" className="social-icon" />
            <img src={image3} alt="Twitter" className="social-icon" />
            <img src={image4} alt="Instagram" className="social-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
