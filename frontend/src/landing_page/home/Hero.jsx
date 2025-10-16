import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5 d-block mx-auto img-fluid hero-img"
        />
        <h1 className="mt-5 fs-3">Invest in everything</h1>
        <p className="mb-5 fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>

        {/*Added hero-btn class here */}
        <button className="btn fs-5 mb-5 hero-btn">Sign up for free</button>
      </div>
    </div>
  );
}

export default Hero;
