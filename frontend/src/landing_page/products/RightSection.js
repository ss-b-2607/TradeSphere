import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlayLink,
  appStoreLink,
}) {
  return (
    <div className="container p-3">
      <div className="row align-items-center">
        <div className="col-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div className="mt-3 p-3">
            <div>
              {tryDemo && (
                <a href={tryDemo} style={{ textDecoration: "none" }}>
                  Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              )}

              {learnMore && (
                <a
                  href={learnMore}
                  style={{ marginLeft: "10px", textDecoration: "none" }}
                >
                  Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              )}
            </div>

            <div className="mt-3 p-3">
              {googlePlayLink && (
                <a href={googlePlayLink}>
                  <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
                </a>
              )}

              {appStoreLink && (
                <a href={appStoreLink} style={{ marginLeft: "10px" }}>
                  <img src="media/images/appStoreBadge.svg" alt="App Store" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="col-1"></div>

        <div className="col-6 p-3">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;