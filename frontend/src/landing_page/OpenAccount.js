import React from 'react';
import {Link} from 'react-router-dom';

function OpenAccount() {
    return (
         <div className="container hero p-5">
            <div className="row text-center">
                <h1 className="mt-5">Open a Zerodha account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <div className="d-flex justify-content-center mt-4">
                    <Link to="/signup" className="btn btn-primary">
                     Sign up for free
                    </Link>
               </div>
            </div>
        </div>
    );
}

export default OpenAccount;