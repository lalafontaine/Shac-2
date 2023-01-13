import React from 'react'
import logo from  "../../images/urban_partners_logo.png";
import profilePic from "../../images/urban_partners.png";

export const ResourceHeader = (props) => {
return (
    <div id="header" className="d-flex  row">
     
      <div className="d-flex p-2 justify-content-center">
          <img className="resThumbnail" src={logo} alt="logo" />
          <h1 className="title ms-3 mt-3"> {props.resName} </h1>
      </div>
      <div className="d-flex p-2 justify-content-center">
          <img className="resImage" src={profilePic} alt=""/>
       </div>
    </div>
  );
};

