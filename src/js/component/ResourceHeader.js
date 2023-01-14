import React from 'react'
import profilePic from "../../images/urban_partners.png";
import Carousel from "./Carousel";

export const ResourceHeader = (props) => {
return (
    <div className="resource-profile-header">

      <div className="">
        <p className="res-profile-title text-center"> {props.resName} </p>
      </div>
      <Carousel />
      {/* <div className="res-profile-image d-flex justify-content-center">
        <img className="resImage rounded-1" src={profilePic} alt=""/>
      </div> */}
    </div>
  );
};

