import React, { useState, useEffect } from "react";
import { IoMdSchool } from "react-icons/io";
import { Link } from "react-router-dom";

import "../css/navbar.css";
import { useAppContext } from "./Auth/AppProvider";
import { useAuth } from "./Auth/use-auth";

export default function Navbar() {
  const auth = useAuth();
  const [active, setActive] = useState("nav_menu");
  const [toggler, setToggler] = useState("nav_toggler");
  useEffect(() => {
    const links = document.querySelectorAll(".nav_item");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        links.forEach((link) => link.classList.remove("nav_link_active"));
        link.classList.add("nav_link_active");
      });
    });
    const logout = document.querySelector(".logout");
    logout.addEventListener("click", () => auth.signout());
  }, []);

  const navToggle = (id) => {
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
        <Link to={"/SchoolProfile/home"} className="nav_brand">
          <IoMdSchool
            size={30}
            style={{
              marginRight: 10,
              position: "relative",
              top: 5,
            }}
          />
          School Profile
        </Link>
        <ul className={active}>
          <li className="nav_item" id={"profile"}>
            <Link
              to="./SchoolProfile/profile"
              className={"nav_link"}
              onClick={() => navToggle("profile")}
            >
              Profile
            </Link>
          </li>
          <li className="nav_item" id="schools">
            <Link
              to={"./SchoolProfile/schools"}
              className="nav_link"
              onClick={navToggle}
            >
              Schools
            </Link>
          </li>
          <li className="nav_item" id="about">
            <Link
              to="./SchoolProfile/about"
              className="nav_link"
              onClick={navToggle}
            >
              About
            </Link>
          </li>

          <li className="nav_item" id="contact">
            <Link
              to="./SchoolProfile/map"
              className="nav_link"
              onClick={navToggle}
            >
              Contact
            </Link>
          </li>

          <li className="nav_item" id="login">
            <Link
              to={"./SchoolProfile/admissions"}
              className="nav_link"
              onClick={navToggle}
            >
              Map
            </Link>
          </li>

          <li
            className="logout"
            style={{
              display: !auth.user && "none",
            }}
          >
            <div className="logout_link" onClick={navToggle}>
              logout
            </div>
          </li>
          <li className="nav_item" style={{ display: auth.user && "none" }}>
            <Link
              to="./SchoolProfile/login"
              className="nav_link"
              onClick={navToggle}
            >
              Login
            </Link>
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
