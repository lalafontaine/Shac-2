import React from 'react'
import profilePic from "../../images/urban_partners.png";

export const ResourceHeader = (props) => {
return (
    <div id="header" className="d-flex  row">

      <div className="d-flex p-2 justify-content-center">
        <p className="res-profile-title ms-3 mt-3"> {props.resName} </p>
      </div>
      <div className="d-flex p-2 justify-content-center">
        <img className="resImage" src={profilePic} alt=""/>
      </div>
    </div>
  );
};

