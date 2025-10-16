import React from "react";

function Stats() {
  return (
    <div className="container p-3 stats-section">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 p-4">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>

          <h2 className="fs-5 mb-2">Customer-first always</h2>
          <p className="text-muted mb-3">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-5 mb-2">No spam or gimmicks</h2>
          <p className="text-muted mb-3" style={{ lineHeight: "1.6" }}>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
            <a href="/philosophies" className="stats-link">
              Our philosophies.
            </a>
          </p>

          <h2 className="fs-5 mb-2">The Zerodha universe</h2>
          <p className="text-muted mb-3" style={{ lineHeight: "1.6" }}>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-5 mb-2">Do better with money</h2>
          <p className="text-muted" style={{ lineHeight: "1.6" }}>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        <div className="col-12 col-lg-6 p-4 text-center">
          <img src="media/images/ecosystem.png" className="stats-img mb-3" />
          <div className="custom-links">
            <a href="" className="d-block d-md-inline mx-md-3 mb-2 mb-md-0">
              Explore our products <i className="fa fa-long-arrow-right"></i>
            </a>
            <a href="" className="d-block d-md-inline mx-md-3">
              Try Kite demo <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
