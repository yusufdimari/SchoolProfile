import React from "react";

export default function Loading() {
  return (
    <div
      className={"loader-container"}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        background: "rgba(0, 0, 0, 0.834)",
        zIndex: 1,
      }}
    >
      <div
        className="loader"
        style={{
          height: 200,
          width: 200,
          alignSelf: "center",
        }}
      />
    </div>
  );
}
