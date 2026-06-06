import React from 'react';
import {Link} from 'react-router-dom';

function Hero() {
    return (
        <div className="container hero p-5">
            <div className="row text-center">
                <img src='media/images/homeHero.png' alt="Hero" className='mb-5'/>
                <h1 className="mt-5">Invest in everything</h1>
                <p>Online trading platform for stocks, mutual funds, and more.</p>
                <div className="d-flex justify-content-center mt-4">
                    <Link to="/signup" className="btn btn-primary">Sign up for free</Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;