import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div
      className="container mt-5"
      style={{ lineHeight: "2", fontSize: "1.05em", maxWidth: "1140px" }}
    >
      <div className="row align-items-center">
        <div className="col-6 p-5 mt-5">
          <h1 className="product-title">{productName}</h1>
          <p>{productDesription}</p>
          <div className="custom-links">
            <a href={learnMore || "#"} style={{ marginLeft: "50px" }}>
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} className="img-fluid zoom-hover" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
