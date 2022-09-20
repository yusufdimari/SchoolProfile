import React from "react";
import "../css/footer.css";
import {
  FaLinkedinIn,
  FaInstagram,
  FaSnapchat,
  FaPaperPlane,
  FaFacebook,
  FaFacebookF,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="3">About us</a>
                </li>
                <li>
                  <a href="3">Our services</a>
                </li>
                <li>
                  <a href="3">Privacy Policy</a>
                </li>
                <li>
                  <a href="3">Affliate Program</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Get Help</h4>
              <ul>
                <li>
                  <a href="3">FAQ</a>
                </li>
                <li>
                  <a href="3">JAMB</a>
                </li>
                <li>
                  <a href="3">WAEC</a>
                </li>
                <li>
                  <a href="3">BESSCE </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Keep in Touch</h4>
              <ul>
                <li>
                  <a
                    target={"_blank"}
                    href="https://www.google.com/maps/place/Nile+University+of+Nigeria/@9.0177471,7.3994599,17z/data=!3m1!4b1!4m5!3m4!1s0x104e7506cc098c9f:0x713db1c45e39ed24!8m2!3d9.0177471!4d7.4016486"
                  >
                    Nile univeristy of Nigeria
                  </a>
                </li>
                <li>Plot 681 Cadastral Zone</li>
                <li>Airport Road</li>
                <li>Abuja, Nigeria</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="www.facebook.com/SchoolProfile" target={"_blank"}>
                  <FaFacebookF />
                </a>
                <a href="www.linkedin.com/SchoolProfile" target={"_blank"}>
                  <FaLinkedinIn />
                </a>
                <Link
                  to={"./instagram"}
                  target="_blank"
                  state={{ link: "www.instagram.com" }}
                >
                  <FaInstagram />
                </Link>
                <a href="mailto:SchoolProfile@gmail.com?subject=Mail from our Website ">
                  <FaPaperPlane />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
