import React from 'react'

function Team() {
    return ( 
         <div className="container">
      <div className="row p-3 mt-5 text-muted">
        <h3 className="text-center">People</h3>
      </div>

      <div
        className="row p-3 about-section team-section"
        style={{ lineHeight: "1.8", fontSize: "1.05em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "56%" }}
          />
          <h5 className="mt-4">Nithin Kamath</h5>
          <h6 className='text-muted mt-4'>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
     );
}

export default Team;