import React from 'react';

function Team() {
    return (
        <div className="container">
      <div className="row p-3  mt-5 border-top ">
        <h1 className="fs-2 text-center mt-5">
         People
        </h1>
      </div>
      <div className="row p-5  text-muted fs-6" style={{ lineHeight:"1.6",fontSize:"1.4em" }}>
        <div className='col-6 p-5 text-center'>
            <img src="media/images/nithinKamath.jpg" alt="Team Member" style={{  borderRadius:"100%",width:"50%",height: 'auto' }} />
            <h5 className="mt-3">Nithin Kamath</h5>
            <h4>Founder & CEO</h4>
        </div>
        <div className='col-6 p-3'>
            <p>
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
                He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>
                Playing basketball is his zen.
            </p>
            <p>
                Connect on <a href="/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#007bff' }}>Homepage</a> / <a href="#" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#007bff' }}>TradingQnA</a> / <a href="#" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#007bff' }}>Twitter</a>
            </p>
        </div>
      </div>

    </div>
    );
}

export default Team;