import React from "react";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="nav">
      <img
        className="img"
        src="https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="logo"
      />
      <h4 className="title">my travel journal</h4>
    </div>
  );
};
