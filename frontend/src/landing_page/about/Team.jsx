import React from "react";

function Team() {
  return (
    <div className="container">
      {/* Section Title */}
      <div className="row p-3 mt-5 text-muted">
        <h3 className="text-center">People</h3>
      </div>

      {/* Team Member */}
      <div className="row p-3 about-section team-section align-items-center">
        {/* Image Column */}
        <div className="col-md-6 col-12 p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="team-img"
          />
          <h5 className="mt-4">Nithin Kamath</h5>
          <h6 className="text-muted mt-2">Founder, CEO</h6>
        </div>

        {/* Info Column */}
        <div className="col-md-6 col-12 p-3 team-info">
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
            <a href="#" className="about-link">
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" className="about-link">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" className="about-link">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;