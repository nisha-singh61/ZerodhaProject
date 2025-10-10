import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5 d-block mx-auto mt-3"
          style={{ width: "65%", height: "auto" }}
        />
        <h1 className="mt-5 fs-3">Invest in everything</h1>
        <p className="mb-5 fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 btn fs-5 mb-5"
          style={{ width: "17%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
