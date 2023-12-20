import React from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';

function DisplayAbout() {
        return (
                <div className="about-us"> 
                <div className='container'>
                        <div className='row'> <h1>The Fast Pinpoint</h1></div>
                        <div className='row'>
                                <div className='col-sm-12 col-lg-6 '>
                                        <h1 className='text-red'> Get Started </h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" fill="#CA1E1E" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                        </svg>
                                </div>
                                 
                                <div className='col-sm-12 col-lg-6 '>
                                        <div className="circle-container">
                                                <div className="circle-text"><Link to={'/Get Started'}>Get Started</Link></div>
                                        </div>

                                </div>
                        </div>
                        
                        <div className='row'>
                        <h1>Tracking & Reservation.</h1>
                                <p>
                                        Pinpoint is the fastest tracking and reservation software solution for personal and enterprise vehicles for institutes, offices, and companies with live tracking, history recording, estimated arrival time, and usage report generation and much more features.
                                        We ensure the best usage for vehicle tracking and reservation system security with advance encryption standards and the capability of keeping your assets like cars, points, and much more secure with the live tracking system.
                                </p>
                        </div>
                        <div className='row'>
                                <div className='col-sm-12 col-lg-4 '>
                                        <button className='btnprop'>5000 Users</button>
                                </div>
                                 
                                <div className='col-sm-12 col-lg-4 '>
                                <button  className='btnprop'>10 Trusted Clients</button>

                                </div>
                                <div className='col-sm-12 col-lg-4 '>
                                <button   className='btnprop' >10k+ Downloads</button>

                                </div>
                        </div>

                </div>
                </div >

        );
}

export default DisplayAbout;
