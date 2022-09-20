import React, { useState, useEffect } from "react";
import { MdMessage } from "react-icons/md";
import { FaBriefcase, FaPaperPlane, FaSearch } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { Link } from "react-router-dom";

import "../css/profilenavbar.css";
import { useAuth } from "./Auth/use-auth";

export default function ProfileNavbar({ setActive, setActiveMessage, data }) {
  const auth = useAuth();
  useEffect(() => {
    const links = document.querySelectorAll(".profile_navlink");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        links.forEach((link) => {
          link.classList.remove("profile_navlink_active");
        });
        link.classList.add("profile_navlink_active");
        setActive(link.textContent == "" ? "Profile" : link.textContent);
        link.textContent == "Messages" && setActiveMessage(null);
      });
    });
  }, []);

  return (
    <div>
      <nav className="profile_nav">
        <div className="profile_nav_left">
          <Link to={"/SchoolProfile/Profile"} className="row center blue bold">
            <IoMdSchool
              size={30}
              style={{
                marginRight: 10,
                position: "relative",
                top: 5,
              }}
            />
            <span className="hidden">School Profile</span>
          </Link>
        </div>
        <div className="profile_nav_right">
          <ul>
            <li>
              <div className="search_box"></div>
            </li>
            <li>
              <div className="flex center hover profile_navlink">
                <FaSearch className="icon" />
                <span className="hidden">Find Jobs</span>
              </div>
            </li>
            <li>
              <div className="flex center hover profile_navlink ">
                <MdMessage className="icon" />
                <span className="hidden">Messages</span>
              </div>
            </li>
            <li className="flex center">
              <div className="flex center hover profile_navlink">
                <FaPaperPlane className="icon" />
                <span className="hidden">Sent Proposals</span>
              </div>
            </li>
            <li className="mini_profile ">
              <div className="profile_navlink">
                <img src={data.uri} />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
