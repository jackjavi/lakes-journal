import React from "react";
import "./Lakes.css";
import { NavBar } from "./NavBar";
import { Lake } from "./Lake";

export const Lakes = () => {
  return (
    <div className="home">
      <div className="nav">
        <NavBar />
      </div>
      <div className="lakes">
        <Lake />
      </div>
    </div>
  );
};
