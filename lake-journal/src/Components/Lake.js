import React from "react";
import "./Lake.css";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import GradeIcon from "@mui/icons-material/Grade";
import { data } from "./Data.js";

export const Lake = () => {
  return (
    <div className="lake">
      {data.map((item) => {
        return (
          <div className="lake-data">
            <img className="lake-img" src={item.imageUrl} alt="lake-img" />
            <div className="lake-info">
              <p className="info-p">
                <span className="location-icon">
                  <AddLocationAltIcon sx={{ fontSize: 20, color: "red" }} />
                </span>
                <span className="location-title">{item.location}</span>
                <span className="location-link">
                  <a
                    className="link"
                    href={item.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    view on google maps
                  </a>
                </span>
              </p>
              <p className="lake-name">{item.title}</p>

              <p className="lake-desc">{item.description}</p>
              <p className="rating">
                Rating:
                <span className="rating-icon">
                  <GradeIcon />
                </span>
                <span className="rate-num">{item.rating}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
