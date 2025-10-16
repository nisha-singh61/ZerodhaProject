import React from "react";

function Awards() {
  return (
    <div className="container mt-5 awards-section">
      <div className="row align-items-center">
        {/* Image column */}
        <div className="col-12 col-md-6 p-4 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid awards-img"
          />
        </div>

        {/* Text column */}
        <div className="col-12 col-md-6 p-4 mt-md-5 text-center text-md-start">
          <h1 className="awards-title">Largest stock broker in India</h1>
          <p className="mb-4 awards-text">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          {/* Lists */}
          <div className="row">
            <div className="col-6 text-start">
              <ul className="awards-list">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6 text-start">
              <ul className="awards-list">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          {/* Press logos */}
          <div className="text-center text-md-start mt-4">
            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid awards-press-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
