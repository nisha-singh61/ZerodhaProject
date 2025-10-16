import React from 'react';

function Education() {
  return ( 
    <div className="container p-5 education-section">
      <div className="row align-items-center">
        {/* Image column */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img 
            src="media/images/education.svg" 
            alt="Education" 
            className="img-fluid education-img"
          />
        </div>

        {/* Text column */}
        <div className="col-12 col-md-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <div className='custom-links'>
            <a href="">
              Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <p className="mt-5">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>

            <a href="">
              TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
