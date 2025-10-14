import React, { Children, useState } from "react";

function AccordionItem({ title, icon, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item-custom border border rounded mb-4">
      <div
        className="d-flex justify-content-between align-items-center p-3"
        style={{ cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Left section: icon + title */}
        <div className="d-flex align-items-center gap-2">
          <i className={icon} style={{ color: " #3d77cd" }}></i>
          <span>{title}</span>
        </div>
        {/* Right arrow */}
        <i
          className={`fa ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}
          style={{ color: " #3d77cd" }}
        ></i>
      </div>

      {/* Body */}
      {isOpen && <div className="p-3 bg-white border-top">{children}</div>}
    </div>
  );
}

function CreateTicket() {
  return (
    <div
      className="container my-4 mt-5 custom-links"
      style={{ maxWidth: "1230px" }}
    >
      <div className="row">
        {/* Left Section - Accordion */}
        <div className="col-md-8">
          <AccordionItem title="Account Opening" icon="fa fa-plus-circle">
            <ul className="ms-4">
              <li>
                <a href="#">Resident individual</a>
              </li>
              <li>
                <a href="#">Minor</a>
              </li>
              <li>
                <a href="#">Non Resident Indian (NRI)</a>
              </li>
              <li>
                <a href="#">Company, Partnership, HUF and LLP</a>
              </li>
              <li>
                <a href="#">Glossary</a>
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Your Zerodha Account" icon="fa fa-user-circle">
            <ul className="ms-4">
              <li>
                <a href="#">Your Profile</a>
              </li>
              <li>
                <a href="#">Account modification</a>
              </li>
              <li>
                <a href="#">
                  Client Master Report (CMR) and Depository Participant (DP)
                </a>
              </li>
              <li>
                <a href="#">Nomination</a>
              </li>
              <li>
                <a href="#">Transfer and conversion of securities</a>
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Kite" icon="fa fa-paper-plane">
            <ul className="ms-4">
              <li>
                <a href="#">IPO</a>
              </li>
              <li>
                <a href="#">Trading FAQs</a>
              </li>
              <li>
                <a href="#">Margin Trading Facility (MTF) and Margins</a>
              </li>
              <li>
                <a href="#">Charts and orders</a>
              </li>
              <li>
                <a href="#">Alerts and Nudges</a>
              </li>
              <li>
                <a href="#">General</a>
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Funds" icon="fa fa-rupee-sign">
            <ul className="ms-4">
              <li>
                <a href="#">Add money</a>
              </li>
              <li>
                <a href="#">Withdraw money</a>
              </li>
              <li>
                <a href="#">Add bank accounts</a>
              </li>
              <li>
                <a href="#">eMandates</a>
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Console" icon="fa fa-desktop">
            <ul className="ms-4">
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Corporate actions</a>
              </li>
              <li>
                <a href="#">Funds statement</a>
              </li>
              <li>
                <a href="#">Reports</a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Segments</a>
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Coin" icon="fa fa-coins">
            <ul className="ms-4">
              <li>
                <a href="#">Mutual funds</a>
              </li>
              <li>
                <a href="#">National Pension Scheme (NPS)</a>
              </li>
              <li>
                <a href="#">Fixed Deposit (FD)</a>
              </li>
              <li>
                <a href="#">Features on Coin</a>
              </li>
              <li>
                <a href="#">Payments and Orders</a>
              </li>
              <li>
                <a href="#">General</a>
              </li>
            </ul>
          </AccordionItem>
        </div>

        {/* Right Section - Notices & Quick Links */}
        <div className="col-md-4" style={{ maxWidth: "380px" }}>
          {/* Notices */}
          <div
            className="p-3 mb-3 notice-box"
            style={{ background: "#fff8f0" }}
          >
            <ul className="mb-0">
              <li className="mb-3">
                <a href="#!">Surveillance measure on scrips – September 2025</a>
              </li>
              <li>
                <a href="#!">Rights Entitlements listing in September 2025</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="border rounded">
            <div className="p-3 fw-medium bg-light border-bottom text-muted">
              Quick links
            </div>
            <ul className="list-unstyled m-0 p-3">
              <li className="border-bottom mb-2 pb-3">
                <a href="#!">1. Track account opening</a>
              </li>
              <li className="border-bottom mb-2 pb-3">
                <a href="#!">2. Track segment activation</a>
              </li>
              <li className="border-bottom mb-2 pb-3">
                <a href="#!">3. Intraday margins</a>
              </li>
              <li className="mb-2">
                <a href="#!">4. Kite user manual</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
