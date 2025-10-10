import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container-fluid border-top mt-5">
        <div className="container" style={{ paddingLeft: "90px", paddingRight: "90px" }}>
          <div className="row mt-5">
            <div className="col">
              <img src="media/images/logo.svg" style={{ width: "70%" }} />
              <p className="mt-2 text-muted" style={{ fontSize: "13px"}}>
                &copy; 2010 - 2024, Not Zerodha Broking Ltd. {" "}All rights
                reserved.
              </p>
              <div className="d-flex gap-4 mb-3 footer-icons" style={{fontSize: "20px"}}>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="border-top d-flex gap-4 pt-3 footer-icons" style={{fontSize: "20px"}}>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-telegram"></i>
              </div>
            </div>
            <div className="col footer-links text-muted">
              <p style={{fontWeight: 500,fontSize: "20px"}}>Account</p>
              <a href="">Open demat account</a>
              <br />
              <a href="">Minor demat account</a>
              <br />
              <a href="">NRI demat account</a>
              <br />
              <a href="">Commodity</a>
              <br />
              <a href="">Dematerialisation</a>
              <br />
              <a href="">Fund transfer</a>
              <br />
              <a href="">MTF</a>
              <br />
              <a href="">Referral program</a>
              <br />
            </div>
            <div className="col footer-links text-muted">
              <p style={{fontWeight: 500, fontSize: "20px"}}>Support</p>
              <a href="">Contact us</a>
              <br />
              <a href="">Support portal</a>
              <br />
              <a href="">How to file a complaint?</a>
              <br />
              <a href="">Status of your complaints</a>
              <br />
              <a href="">Bulletin</a>
              <br />
               <a href="">Circular</a>
              <br />
               <a href="">Z-Connect blog</a>
              <br />
               <a href="">Downloads</a>
              <br />
            </div>
            <div className="col footer-links text-muted">
              <p style={{fontWeight: 500, fontSize: "20px"}}>Company</p>
              <a href="">About</a>
              <br />
              <a href="">Philosophy</a>
              <br />
              <a href="">Press & media</a>
              <br />
               <a href="">Careers</a>
              <br />
               <a href="">Zerodha Cares (CSR)</a>
              <br />
               <a href="">Zerodha.tech</a>
              <br />
               <a href="">Open source</a>
              <br />
            </div>
            <div className="col footer-links text-muted">
              <p style={{fontWeight: 500, fontSize: "20px"}}>Quick links</p>
              <a href="">Upcoming IPOs</a>
              <br />
              <a href="">Brokerage charges</a>
              <br />
              <a href="">Market holidays</a>
              <br />
               <a href="">Economic calendar</a>
              <br />
               <a href="">Calculators</a>
              <br />
               <a href="">Markets</a>
              <br />
               <a href="">Sectors</a>
              <br />
            </div>
          </div>
          <div className="mt-5 text-muted" style={{ fontSize: "10px", lineHeight: "2.1"}}>
            <p>
              Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration
              no.: INZ000031633 CDSL: Depository services through Zerodha
              Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015
              Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025
              – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
              Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
              Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
              India. For any complaints pertaining to securities broking please
              write to complaints@zerodha.com, for DP related to dp@zerodha.com.
              Please ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>

            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>

            <p>
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </p>

            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>

            <p>
              India's largest broker based on networth as per NSE. NSE broker
              factsheet
            </p>

            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here.
            </p>
          </div>
           
        </div>
      </div>
      <div className="container" style={{ paddingLeft: "150px", paddingRight: "120px", fontSize:"13px"}}>
 <ul className="d-flex flex-wrap list-unstyled gap-3">
              <li className="">
                <a className="down-links">NSE</a>
              </li>
               <li className="">
                <a className="down-links">BSE</a>
              </li>
               <li className="">
                <a className="down-links">MCX</a>
              </li>
               <li className="">
                <a className="down-links">Terms & conditions</a>
              </li>
               <li className="">
                <a className="down-links">Policies & procedures</a>
              </li>
               <li className="">
                <a className="down-links">Privacy policy</a>
              </li>
               <li className="">
                <a className="down-links">Disclosure</a>
              </li>
               <li className="">
                <a className="down-links">For investor's attention</a>
              </li> 
              <li className="">
                <a className="down-links">Investor charter</a>
                </li>
            </ul>
      </div>
    </footer>
  );
}

export default Footer;
