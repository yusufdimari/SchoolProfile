import React, { useEffect } from "react";

export default function ExternalPage() {
  useEffect(() => {
    window.location.replace("https://www.instagram.com");
  }, []);

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return (
    <div
      className="error-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //   flexGrow: 1,
        flexGrow: 1,
      }}
    >
      <div className="error-message" style={{ fontSize: 20, color: "white" }}>
        Redirecting...
      </div>
    </div>
  );
}
