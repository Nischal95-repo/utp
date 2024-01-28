import React from "react";
import upArrow from "../../Assets/SVG/up-arrow.svg";
import mail from "../../Assets/SVG/open-mail.svg";
import phone from "../../Assets/SVG/phone-call.svg";
import logo from "../../Assets/Images/logo.jpg";

import withWidth from "@material-ui/core/withWidth";
import { Link } from "react-router-dom";

const Footer = (props) => {
  console.log("footerbreakpoint", props.width);
  return (
    <div className="footer">
      <div className="footer-dark">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: props.width == "xs" ? "column" : "row",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <img src={logo} style={{ height: "80px", paddingTop: "30px" }} />
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/product-list">Products</Link>
              </li>
              <li>
                <Link to="/home#about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact Info</h3>
            <span>
              185/B,(Ground floor), 5th Main,
              <br />
              Devanathachar Street, Chamrajpet,
              <br /> Bengaluru, Karnataka - 560018
            </span>
          </div>
        </div>
      </div>
      <div className="footer-light">
        <div
          className="copyright"
          style={{
            display: "flex",
            flexDirection: props.width == "xs" ? "column" : "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <p>
              Unitech Products © 2018. <b>All Rights Reserved</b>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <img src={mail} style={{ padding: " 0 5px 12px 10px" }} />
            <a href="mailto:support@atriapower.com">
              <p>unitech_products@gmail.com</p>
            </a>
            <img src={phone} style={{ padding: " 0 5px 12px 10px" }} />{" "}
            <p> 080-22424293</p>
          </div>
          <div
            className=" text-center"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              // document.body.scrollTop = 0;
              // document.documentElement.scrollTop = 0;
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            {props.width != "xs" && props.width != "sm" && <p>Go Up</p>}
            <img src={upArrow} style={{ padding: " 0 0 12px 10px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default withWidth()(Footer);
