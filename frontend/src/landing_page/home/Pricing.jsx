import React from "react";

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row p-5 align-items-center">
        {/* Text Section */}
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <div className="custom-links">
            <a href="">
              See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* Spacer for large screens */}
        <div className="d-none d-lg-block col-lg-2"></div>

        {/* Pricing Boxes */}
        <div className="col-12 col-md-6 col-lg-6 p-3">
          <div className="row text-center">
            <div className="col-12 col-sm-6 p-3 border pricing-box mb-3 mb-sm-0">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col-12 col-sm-6 p-3 border pricing-box">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
