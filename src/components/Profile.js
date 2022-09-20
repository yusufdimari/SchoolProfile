import userEvent from "@testing-library/user-event";
import React from "react";
import { BsBadgeHd, BsEye, BsStarFill, BsStarHalf } from "react-icons/bs";
import { MdCheck, MdMessage } from "react-icons/md";
import { useAuth } from "./Auth/use-auth";

export default function Profile({ active, data }) {
  const { user } = useAuth();
  return (
    <div
      className="bottom "
      style={{ display: active != "Profile" && "none", marginTop: 20 }}
    >
      <div className="left ">
        <img src={data.uri} alt="profile pic" className="profile_pic" />
        <div className="profile_container">
          <div className="container_header">
            <p className="container_title">Work</p>
            <div className="underline" />
          </div>
          <div className="container_content">
            <p className="work_place">SAGA</p>
            <p className="work_address">
              Plot 177 R.B Dikko Road
              <br />
              Asokoro Abuja
            </p>
          </div>
        </div>
        <div className="profile_container">
          <div className="container_header">
            <p className="container_title">Skills</p>
            <div className="underline" />
          </div>
          <div className="container_content">
            <ul>
              <li>Coding</li>
              <li>Coding</li>
              <li>Coding</li>
              <li>Coding</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right">
        <p className="name">
          {data.name.fname + " " + data.name.mname + " " + data.name.lname}
        </p>
        <p className="job_description">School Teacher</p>
        <p className="container_title">Ratings</p>
        <p className="rating align-center">
          <span style={{ marginRight: 10 }}>4.5</span>{" "}
          <BsStarFill className="blue" />
          <BsStarFill className="blue" />
          <BsStarFill className="blue" />
          <BsStarFill className="blue" />
          <BsStarHalf className="blue" />
        </p>
        <div className="row selector">
          <p className="message  row_container " id="send_message">
            <MdMessage className="icon" /> Send Message
          </p>

          <p className="contacts row_container" id="contacts">
            <MdCheck className="icon" />
            Contacts
          </p>
          {/* <p className=" row_container report">Report User</p> */}
        </div>
        <div className="bottom_container">
          <div className="container_title row">
            <p className="row_container">
              <BsEye className="icon" /> Timeline
            </p>
            <p className="row_container active">
              <BsBadgeHd className="icon" /> About
            </p>
          </div>

          <div className="underline" />
          <p className="gray uppercase contact_info">Contact Information</p>
          <ul>
            <li>
              <ul className="row">
                <li className="contact_info_title bold">Phone: </li>
                <li className="contact_info_details blue ">
                  +234 {data.phone}
                  <br /> +2349055969965
                </li>
              </ul>
            </li>
            <li>
              <ul className="row">
                <li className="contact_info_title bold">Email: </li>
                <li className="contact_info_details blue ">{user.email}</li>
              </ul>
            </li>
            <li>
              <ul className="row">
                <li className="contact_info_title bold">Address: </li>
                <li className="contact_info_details ">
                  NNPC QUARTERS
                  <br /> Area 11, Abuja.
                </li>
              </ul>
            </li>
            <li>
              <ul className="row">
                <li className="contact_info_title bold">Gender: </li>
                <li className="contact_info_details ">Male</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
