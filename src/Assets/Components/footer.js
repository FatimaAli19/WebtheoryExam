import React from 'react';
import '../styles.css';
import image1 from '../images/image 2.png'
function Footer() {
  return (
    <footer className="footer">
      <div className='fcontainer'>
        <div className='row'>
          <div className='col-sm-12 col-lg-6 '>
            <img className='fimg' src={image1} alt='logo' /> 
          </div>
          <div className='col-sm-12 col-lg-6 '>
            <p className='me-auto'>All copy rights are reserved by Sukkur IBA University</p>
          </div>
           

        </div>
      </div>

    </footer>
  );
}

export default Footer;
