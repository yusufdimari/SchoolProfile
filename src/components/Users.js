import React, { useState } from "react";
import firebase from "../Firebase/firebase";

export default function Users({ active }) {
  const [users, setusers] = useState([]);
  const search = (query) => {
    firebase
      .firestore()
      .collection("users")
      .where("username", "==", query)
      .get()
      .then((res) => {
        let temp = [];
        res.forEach((r) => temp.push(r.data().username));
        setusers(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className="bottom"
      style={{
        display: active != "Find Jobs" ? "none" : "flex",
        marginTop: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <input
        id="search"
        type={"text"}
        style={{
          marginBottom: 10,
          width: "50%",
          padding: 10,
          borderRadius: 10,
        }}
        placeholder="please input Username"
        onChange={() => {
          let query = document.getElementById("search").value;
          search(query);
        }}
      />
      {users.length < 1 && (
        <div style={{ color: "red" }}>No user with such username</div>
      )}
      <div style={{ overflow: "scroll" }}>
        {users.map((user) => (
          <div style={{ textAlign: "center", textTransform: "lowercase" }}>
            {user}
          </div>
        ))}
      </div>
    </div>
  );
}
