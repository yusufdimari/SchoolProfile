import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "./AppProvider";

export default function Storage() {
  const { setUser } = useAppContext();
  const navigate = useNavigate();
  async function login(email, password) {
    try {
      setUser({ name: "Yusuf Dimari", email: email });
      navigate("../SchoolProfile/home", { replace: true });
    } catch (error) {
      console.log(error);
    }
  }
  function logout() {
    setUser(false);
  }
  return { login, logout };
}
