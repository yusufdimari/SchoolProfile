import React, { useState } from "react";
import App from "../App";
import { IoMdSchool } from "react-icons/io";

import "../navbar.css";

export default function () {
  const [active, setActive] = useState("nav_menu");
  const [toggler, setToggler] = useState("nav_toggler");
  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    toggler === "nav_toggler"
      ? setToggler("nav_toggler toggle")
      : setToggler("nav_toggler");
  };
  return (
    <div>
      <nav className="nav">
        <a href="£" className="nav_brand">
          <IoMdSchool
            size={30}
            style={{
              marginRight: 10,
              position: "relative",
              top: 5,
            }}
          />
          School Profile
        </a>
        <ul className={active}>
          <li className="nav_item">
            <a href={"App.js"} className="nav_link">
              Home
            </a>
          </li>
          <li className="nav_item">
            <a href={"App.js"} className="nav_link">
              Admissions
            </a>
          </li>
          <li className="nav_item">
            <a href={"App.js"} className="nav_link">
              Exams
            </a>
          </li>
          <li className="nav_item">
            <a href="£" className="nav_link">
              About
            </a>
          </li>
          <li className="nav_item">
            <a href="£" className="nav_link">
              Contact
            </a>
          </li>
          <li className="nav_item">
            <a href="£" className="nav_link">
              login
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className={toggler}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}
