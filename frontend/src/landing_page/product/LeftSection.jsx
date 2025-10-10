import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div
      className="container mt-5 p-5 ps-5"
      style={{ lineHeight: "2", fontSize: "1.05em", maxWidth: "1140px" }}
    >
      <div className="row align-items-center">
        <div className="col-6 pe-5">
          <img src={imageURL} className="img-fluid zoom-hover" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1 className="product-title">{productName}</h1>
          <p>{productDesription}</p>
          <div className="custom-links">
            <a href={tryDemo || "#"}>
              Try Demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore || "#"} style={{ marginLeft: "50px" }}>
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" className="store-badge"/>
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                className="store-badge"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
