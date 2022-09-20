import React, { useEffect, useState } from "react";
import { FaPaperPlane, FaPlus } from "react-icons/fa";
import "../css/messages.css";

export default function Messages({
  active,
  messages,
  setActiveMessage,
  activeMessage,
}) {
  // useEffect(() => {
  //   const send = document.getElementById("send");
  //   activeMessage &&
  //     send.addEventListener("click", () => {
  //       let sent = document.getElementById("message").value;
  //       console.log("sent", sent);
  //       let temp = activeMessage;
  //       temp.messages.push({ sent: true, content: sent, timestamp: 12345678 });
  //       console.log("messages", temp);
  //     });
  // }, [activeMessage]);

  const send = () => {
    const query = document.getElementById("message").value;
    let temp = messages[activeMessage];
    console.log(temp);
    temp.messages.push({ sent: true, content: query, timestamp: 12345678 });
    console.log(temp);

    // temp.messages.push({ sent: true, content: query, timestamp: 12345678 });
  };
  const dimension = window.innerWidth;
  return (
    <div
      style={{
        display: active == "Messages" ? "flex" : "none",
        height: "50vh",
      }}
    >
      <div
        className="messages_list"
        style={{ display: dimension < 1023 && activeMessage && "none" }}
      >
        {messages.map((message) => (
          <>
            <div
              onClick={() => {
                setActiveMessage(messages.indexOf(message));
              }}
              className="message"
              style={{
                display: activeMessage
                  ? dimension < 1023
                    ? "none"
                    : "flex"
                  : "flex",
                padding: 10,
                alignItems: "center",
              }}
            >
              <img
                src={require("../img/Dems.jpeg")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  marginRight: 20,
                }}
              />
              <p style={{ textTransform: "capitalize" }}>{message.from}</p>
            </div>
            <div
              style={{
                content: "",
                width: "100%",
                backgroundColor: "rgb(179, 176, 176)",
                height: 2,
              }}
            />
          </>
        ))}
      </div>
      <div
        style={{
          content: "",
          width: 2,
          backgroundColor: "rgb(179, 176, 176)",
          height: "100%",
        }}
      />
      <div
        className="message_preview"
        style={{
          display: dimension < 1023 && !activeMessage && "none",
          height: "100%",
        }}
      >
        {activeMessage ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <p
              style={{
                padding: 10,
                textAlign: "center",
                width: "100%",
                textTransform: "capitalize",
                backgroundColor: "rgba(11, 153, 209, 0.987)",
                display: "flex",
                marginBottom: 10,
              }}
            >
              {messages[activeMessage].from}
            </p>
            <div
              className="message_preview"
              id="my_messages"
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                overflow: "scroll",
              }}
            >
              {messages[activeMessage].messages.map((message) => {
                return (
                  <div
                    classname="message_preview_content"
                    style={{
                      backgroundColor: "rgba(11, 153, 209, 0.987)",
                      width: "fit-content",
                      padding: 10,
                      border: "none",
                      borderRadius: 10,
                      margin: 10,
                      marginTop: 0,
                      alignSelf: message.sent && "flex-end",
                    }}
                  >
                    {message.content}
                  </div>
                );
              })}
            </div>
            <div
              className="input_container"
              style={{
                backgroundColor: "rgba(11, 153, 209, 0.987)",
                padding: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginTop: "auto",
              }}
            >
              <input
                type={"text"}
                id="message"
                style={{
                  marginTop: "auto",
                  padding: 5,
                  borderRadius: 10,
                  border: "none",
                  width: "90%",
                  // marginRight: 10,
                }}
              />
              <FaPlus color="white" />
              <FaPaperPlane color="white" id="send" onClick={send} />
            </div>
          </div>
        ) : (
          <div
            style={{
              margin: "auto",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>Select a Message to preview</p>
          </div>
        )}
      </div>
    </div>
  );
}
