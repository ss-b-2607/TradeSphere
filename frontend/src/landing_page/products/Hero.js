import React from 'react';

function Hero() {
    return (
        <div className="container text-center p-3">
            <h1 className="fs-4">Zerodha Products</h1>
            <h3 className="lead mt-3">Sleek, modern, and intuitive trading platforms</h3>
            <p className="text-muted mt-3">Check out our <a href="/investment-offerings" className="text-decoration-none">investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
        </div>
    );
}

export default Hero;