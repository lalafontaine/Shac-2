import React from "react";
import StarRating from "./StarRating";

export const ResourceProfile = (props) => {
  return (
 
      <div>
        {/* <!-- Card text body --> */}
        <div class="card-body">
          {/* <!-- operating hours --> */}
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
          <p className="p-2">
            {" "}
            <strong>About this resource: </strong> {props.about}
          </p>

          {/* <!-- Star Rating --> */}
          <StarRating rating="5" />
        </div>
      </div>
  
  );
};

export default ResourceProfile;
