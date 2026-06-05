import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return(
        <footer  style={{backgroundColor:"rgb(250, 250, 250)"}}>
        <div className='container border-top mt-5'>
            <div className='row'>
                <div className='col-lg-2 col-md-4 col-sm-6 mb-4'>
                    <img src='media/images/logo.svg' alt="Footer Logo" style={{width:"50%"}}/>
                    <p> &copy;2010 - 2026, Zerodha Broking Ltd.<br></br>
All rights reserved.</p>
<div className="mt-3">
    <i className="fa fa-twitter me-3"></i>
    <i className="fa fa-facebook me-3"></i>
    <i className="fa fa-instagram me-3"></i>
    <i className="fa fa-linkedin"></i>
</div>
                </div>

                <div className='col-lg-2 col-md-4 col-sm-6 mb-4'>
                   <h5 className="mb-3">Company</h5>
                    <Link to="/open-demat-account" className="footer-link">Open demat account</Link><br></br>
                    <Link to="/minor-demat-account" className="footer-link">Minor demat account</Link><br></br>
                    <Link to="/nri-demat-account" className="footer-link">NRI demat account</Link><br></br>
                    <Link to="/huf-demat-account" className="footer-link">HUF demat account</Link><br></br>
                    <Link to="/commodity" className="footer-link">Commodity</Link><br></br>
                    <Link to="/dematerialisation" className="footer-link">Dematerialisation</Link><br></br>
                    <Link to="/fund-transfer" className="footer-link">Fund transfer</Link><br></br>
                    <Link to="/mtf" className="footer-link">MTF</Link><br></br>
                </div>

                <div className='col-lg-2 col-md-4 col-sm-6 mb-4'>
                    <h5 className="mb-3">Support</h5>
                    <Link to="/contact-us" className="footer-link">Contact us</Link><br></br>
                    <Link to="/support-portal" className="footer-link">Support portal</Link><br></br>
                    <Link to="/how-to-file-a-complaint" className="footer-link">How to file a complaint?</Link><br></br>
                    <Link to="/status-of-your-complaints" className="footer-link">Status of your complaints</Link><br></br>
                    <Link to="/bulletin" className="footer-link">Bulletin</Link><br></br>
                    <Link to="/circular" className="footer-link">Circular</Link><br></br>
                    <Link to="/z-connect-blog" className="footer-link">Z-Connect blog</Link><br></br>
                    <Link to="/downloads" className="footer-link">Downloads</Link><br></br>
                </div>

                <div className='col-lg-2 col-md-4 col-sm-6 mb-4'>
                    <h5 className="mb-3">Account</h5>
                    <Link to="/about" className="footer-link">About</Link><br></br>
                    <Link to="/philosophy" className="footer-link">Philosophy</Link><br></br>
                    <Link to="/press-media" className="footer-link">Press & media</Link><br></br>
                    <Link to="/careers" className="footer-link">Careers</Link><br></br>
                    <Link to="/zerodha-cares" className="footer-link">Zerodha Cares (CSR)</Link><br></br>
                    <Link to="/zerodha-tech" className="footer-link">Zerodha.tech</Link><br></br>
                    <Link to="/open-source" className="footer-link">Open source</Link><br></br>
                    <Link to="/referral-program" className="footer-link">Referral program</Link><br></br>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6 mb-4'>
                    <h5 className="mb-3">Quick Links</h5>
                    <Link to="/upcoming-ipos" className="footer-link">Upcoming IPOs</Link><br></br>
                    <Link to="/brokerage-charges" className="footer-link">Brokerage charges</Link><br></br>
                    <Link to="/market-holidays" className="footer-link">Market holidays</Link><br></br>
                    <Link to="/economic-calendar" className="footer-link">Economic calendar</Link><br></br>
                    <Link to="/calculators" className="footer-link">Calculators</Link><br></br>
                    <Link to="/markets" className="footer-link">Markets</Link><br></br>
                    <Link to="/sectors" className="footer-link">Sectors</Link><br></br>
                    <Link to="/gift-nifty" className="footer-link">Gift Nifty</Link><br></br>
                </div>

            </div>
       <div className="footer-disclaimer">
  
  <p>
    Zerodha Broking Ltd.: Member of NSE, BSE, MCX &amp; MSEI – SEBI Registration no.:
    INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. –
    SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd.,
    #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
    J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
    For any complaints pertaining to securities broking please write to{" "}
    <Link to="mailto:complaints@zerodha.com">complaints@zerodha.com</Link>,
    for DP related to{" "}
    <Link to="mailto:dp@zerodha.com">dp@zerodha.com</Link>.
    Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
  </p>

  <p>
    Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
    Mandatory details for filing complaints on SCORES: Name, PAN, Address,
    Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
    redressal of the grievances.
  </p>

  <p>
    Smart Online Dispute Resolution | Grievances Redressal Mechanism
  </p>

  <p>
    Investments in securities market are subject to market risks; read all
    the related documents carefully before investing.
  </p>

  <p>
    Attention investors:
    <br />
    1) Stock brokers can accept securities as margins from clients only by
    way of pledge in the depository system w.e.f September 01, 2020.
    <br />
    2) Update your e-mail and phone number with your stock broker /
    depository participant and receive OTP directly from depository on your
    e-mail and/or mobile number to create pledge.
    <br />
    3) Check your securities / MF / bonds in the consolidated account
    statement issued by NSDL/CDSL every month.
  </p>

  <p>
    India's largest broker based on networth as per NSE. NSE broker factsheet.
  </p>

  <p>
    "Prevent unauthorised transactions in your account. Update your mobile
    numbers/email IDs with your stock brokers/depository participants.
    Receive information of your transactions directly from
    Exchange/Depositories on your mobile/email at the end of the day.
    Issued in the interest of investors. KYC is one time exercise while
    dealing in securities markets - once KYC is done through a SEBI
    registered intermediary (broker, DP, Mutual Fund etc.), you need not
    undergo the same process again when you approach another intermediary."
  </p>

  <p>
    Dear Investor, if you are subscribing to an IPO, there is no need to
    issue a cheque. Please write the Bank account number and sign the IPO
    application form to authorize your bank to make payment in case of
    allotment. In case of non allotment the funds will remain in your bank
    account.
  </p>

  <p>
    As a business we don't give stock tips, and have not authorized anyone
    to trade on behalf of others. If you find anyone claiming to be part of
    Zerodha and offering such services, please create a ticket here.
  </p>

  <p>
    *Customers availing insurance advisory services offered by Ditto
    (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent
    (Composite) License No CA0738) will not have access to the exchange
    investor grievance redressal forum, SEBI SCORES/ODR, or arbitration
    mechanism for such products.
  </p>

  <p>
    Fixed deposit products offered on this platform are third-party products
    (TPP) and are not Exchange traded products. These are offered through
    Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI
    Registration No.: INZ000031633) is acting solely as a distributor for
    these products. Any disputes arising with respect to such distribution
    activity will not have access to SEBI SCORES/ODR, Exchange Investor
    Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are
    regulated by the Reserve Bank of India (RBI).
  </p>

</div>
       <div className="d-flex flex-wrap justify-content-center gap-4 mt-4 pb-4">

  <Link to="/NSE" className="footer-link">NSE</Link>
  <Link to="/BSE" className="footer-link">BSE</Link>
  <Link to="/MCX" className="footer-link">MCX</Link>
  <Link to="/MSEI" className="footer-link">MSEI</Link>
  <Link to="/terms-conditions" className="footer-link">Terms & Conditions</Link>
  <Link to="/policies-procedures" className="footer-link">Policies & Procedures</Link>
  <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
  <Link to="/disclosure" className="footer-link">Disclosure</Link>
  <Link to="/investor-attention" className="footer-link">For investor's attention</Link>
  <Link to="/investor-charter" className="footer-link">Investor charter</Link>

</div>
        </div>
     </footer>
    );
}

export default Footer;