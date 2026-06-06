import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="fs-2 text-center mt-5">People</h1>
      </div>

      <div
        className="row p-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
      >
        <div className="col-lg-6 col-md-12 text-center mb-4">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid"
            style={{
              borderRadius: "50%",
              width: "250px",
              height: "250px",
              objectFit: "cover",
            }}
          />

          <h5 className="mt-4 mb-1 text-dark">Nithin Kamath</h5>
          <h6>Founder & CEO</h6>
        </div>

        <div className="col-lg-6 col-md-12">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a
              href="https://zerodha.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#387ed1",
              }}
            >
              Homepage
            </a>{" "}
            /{" "}
            <a
              href="https://tradingqna.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#387ed1",
              }}
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href="https://twitter.com/Nithin0dha"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#387ed1",
              }}
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;