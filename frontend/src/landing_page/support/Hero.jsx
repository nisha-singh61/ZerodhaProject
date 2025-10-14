import React from "react";

function Hero() {
  return (
    <div
      className="py-5"
      style={{
        backgroundColor: "#f8f9fa", // light gray background
        borderBottom: "1px solid #dee2e6", // subtle border bottom
      }}
    >
      <div className="container" style={{ maxWidth: "1230px" }}>
        {/* Header row */}
        <div className="row align-items-center mb-4">
          <div className="col-md-8">
            <h2 className="fs-1" style={{ color: "#454444" }}>
              Support Portal
            </h2>
          </div>
          <div className="col-md-4 text-md-end mt-3 mt-md-0 fw-medium">
            <button
              className="btn"
              style={{ padding: "5px 19px", fontSize: "1.1rem" }}
            >
              My tickets
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div className="row">
          <div className="col-12">
            <div
              className="input-group shadow-sm rounded overflow-hidden"
              style={{ height: "60px" }}
            >
              <span
                className="input-group-text bg-white border-0"
                style={{ padding: "0 20px" }}
              >
                <i className="fa-solid fa-magnifying-glass text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Eg: How do I open my account, How do I activate F&O..."
                style={{
                  height: "100%",
                  boxShadow: "none",
                  fontSize: "1em",
                  color: "#212529",
                  paddingLeft: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
