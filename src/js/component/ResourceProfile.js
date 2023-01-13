import React from "react";
import StarRating from "./StarRating";
import logo from  "../../images/urban_partners_logo.png";

export const ResourceProfile = (props) => {
  return (
 
      <div>
        {/* <!-- Card text body --> */}
        <div >
        <img className="res-profile-logo" src={logo} alt="logo" />
          <span className="ms-3"><strong>
            Urban Partners </strong>
          </span>
          <div>
          <StarRating rating="5" />
          <span>( 84 votes)</span>
          </div>
          <p className="p-2">
            {" "} {props.about}
          </p>
          <p className="p-2">
            <strong>Hours: </strong> Monday - Friday, 7:00a.m.- 4:30p.m.
          </p>
          <p className="p-2">
            <strong>Address: </strong> 555 N Sunset Blvd. 90026
          </p>
          <p className="p-2">
            <strong>Directions: </strong> (link for google Maps)
          </p>
          <p className="p-2">
            <strong>Phone: </strong> 213-555-5555
          </p>
          <p className="p-2">
            <strong>Website: </strong>{" "}
            <a href="https://urbanpartnersla.org">
              {" "}
              https://urbanpartnersla.org/{" "}
            </a>
          </p>

        </div>
      </div>
  
  );
};

export default ResourceProfile;
