import React from "react";
import StarRating from "./StarRating";
import logo from "../../images/urban_partners_logo.png";

export const ResourceProfile = (props) => {
  return (
      <div>
        <img className="res-profile-logo" src={logo} alt="logo" />
        <span className="ms-3">
          <strong> {props.name}</strong>
        </span>
        <div>
          <StarRating rating="5" />
          <span>( {props.numberOfVotes})</span>
        </div>
        <p className="p-2"> {props.about}</p>
        <p className="p-2">
          <strong>Hours: </strong>  {props.hours}
        </p>
        <p className="p-2">
          <strong>Address: </strong> {props.address}
        </p>
        <p className="p-2">
          <strong>Directions: </strong> (link for google Maps)
        </p>
        <p className="p-2">
          <strong>Phone: </strong> {props.phone}
        </p>
        <p className="p-2">
          <strong>Website: </strong>{props.website}
        </p>
      </div>
  );
};

export default ResourceProfile;
