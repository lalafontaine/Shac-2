import React from "react";
import { Link } from "react-router-dom";

export const Donate = () => {
  return (
    <div>
      <svg width="75" height="120">
        **
        <a style={{textDecoration:"none"}} href="#">
          **
          <circle cx="30" cy="60" r="30" fill="#007BFF" />
          <text
            x="30"
            y="60"
            fill="#FFFFFF"
            textAnchor="middle"
            alignment-baseline="middle"
          >
            DONATE
          </text>
          **
        </a>
        **
      </svg>
    </div>
  );
};
