import React, { useEffect, useState } from "react";

import "../css/profile.css";
import ProfileNavbar from "../components/ProfileNavbar";
import Messages from "../components/Messages";
import Profile from "../components/Profile";
import firebase from "../Firebase/firebase";
import { useAuth } from "../components/Auth/use-auth";
import Users from "../components/Users";
import Lottie from "lottie-web";
import loadingAnimation from "../static/loadingAnimation.json";
import Loading from "../components/Loading";

export default function ProfileScreen() {
  const [activeMessage, setActiveMessage] = useState(null);
  const [active, setActive] = useState("Profile");
  const messages = [
    {
      from: "yusuf Dimari",
      messages: [
        { sent: true, content: "Hello", timestamp: 12345678 },
        { sent: false, content: "Hey", timestamp: 12345678 },
        { sent: true, content: "Hello", timestamp: 12345678 },
        { sent: false, content: "Hey", timestamp: 12345678 },
        { sent: false, content: "Hello", timestamp: 12345678 },
        { sent: true, content: "Hello", timestamp: 12345678 },
        { sent: false, content: "Hey", timestamp: 12345678 },
        { sent: true, content: "Hello", timestamp: 12345678 },
        { sent: false, content: "Hey", timestamp: 12345678 },
        { sent: false, content: "Hello", timestamp: 12345678 },
        { sent: true, content: "Hello", timestamp: 12345678 },
        { sent: false, content: "Hey", timestamp: 12345678 },
        { sent: true, content: "Hello", timestamp: 12345678 },
        { sent: false, content: "Hey", timestamp: 12345678 },
        { sent: false, content: "Hello", timestamp: 12345678 },
      ],
    },
    {
      from: "deems Junior",
      messages: [
        { sent: false, content: "Hello", timestamp: 12345678 },
        { sent: false, content: "Hey", timestamp: 12345678 },
        { sent: false, content: "Hello", timestamp: 12345678 },
        { sent: false, content: "Hey", timestamp: 12345678 },
        { sent: false, content: "Hello", timestamp: 12345678 },
      ],
    },
    {
      from: "yusuf Dimari",
      messages: [
        { sent: false, content: "Hello", timestamp: 12345678 },
        { sent: false, content: "Hey", timestamp: 12345678 },
        { sent: false, content: "Hello", timestamp: 12345678 },
        { sent: false, content: "Hey", timestamp: 12345678 },
        { sent: false, content: "Hello", timestamp: 12345678 },
      ],
    },
    {
      from: "deems Junior",
      messages: [
        { sent: false, content: "Hello", timestamp: 12345678 },
        { sent: false, content: "Hey", timestamp: 12345678 },
        { sent: false, content: "Hello", timestamp: 12345678 },
        { sent: false, content: "Hey", timestamp: 12345678 },
        { sent: false, content: "Hello", timestamp: 12345678 },
      ],
    },
    {
      from: "yusuf Dimari",
      messages: [
        { sent: false, content: "Hello", timestamp: 12345678 },
        { sent: false, content: "Hey", timestamp: 12345678 },
        { sent: false, content: "Hello", timestamp: 12345678 },
        { sent: false, content: "Hey", timestamp: 12345678 },
        { sent: false, content: "Hello", timestamp: 12345678 },
      ],
    },
    {
      from: "deems Junior",
      messages: [
        { sent: false, content: "Hello", timestamp: 12345678 },
        { sent: false, content: "Hey", timestamp: 12345678 },
        { sent: false, content: "Hello", timestamp: 12345678 },
        { sent: false, content: "Hey", timestamp: 12345678 },
        { sent: false, content: "Hello", timestamp: 12345678 },
      ],
    },
    { from: "yusuf Dimari" },
    { from: "deems Junior" },
    { from: "yusuf Dimari" },
    { from: "deems Junior" },
    { from: "yusuf Dimari" },
    { from: "deems Junior" },
  ];
  const [data, setData] = useState(null);
  const { getProfile } = useAuth();
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.querySelector(".loader"),
      animationData: loadingAnimation,
    });
    getProfile(setData);
    const messages = document.querySelectorAll(".message");
    messages.forEach((message) => {
      message.addEventListener("click", () => {
        messages.forEach((message) => {
          message.classList.remove("message_active");
        });
        message.classList.add("message_active");
      });
    });
  }, []);

  if (!data) {
    return <Loading />;
  }
  return (
    <div className="container profile">
      <div className="top">
        <ProfileNavbar
          data={data}
          setActive={setActive}
          setActiveMessage={setActiveMessage}
        />
      </div>
      <div className="top_underline" />
      <Messages
        active={active}
        activeMessage={activeMessage}
        messages={messages}
        setActiveMessage={setActiveMessage}
      />
      <Users active={active} />
      <Profile active={active} data={data} />
    </div>
  );
}
