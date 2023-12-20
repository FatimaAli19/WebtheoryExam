import React from 'react';
import '../styles.css'; 
import DisplayAbout  from './Aboutus';
import Welcomepage from './wpage';
function Welcome() {
  return (
    <>
    
    <Welcomepage/>
    <DisplayAbout/>
    <div className='container'>
     <h1 className='text-black'>Pinpoint Security,
ensure the best 
usage for the institutes</h1>
<p>We ensure the best usage for vehicles tracking and reservation system security with advance encryption standards and capability of keeping your assets like car, points much more secure with the live tracking system</p>
<div className='btn-center'>
                                        <button className='btnprop'>Get Started</button>
                                </div>


    </div>

    </>
     
  );
}

export default Welcome;
