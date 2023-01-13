import React from "react";
import avatar from "../../images/cardiB.jpg";
import StarRating from "./StarRating";

const Review = (props) => {
  return (
      <div className="review d-flex justify-content-end row align-items-center">
        <div className="col-5">
        <span>{props.review}</span>
        </div>
        <div className="col-3">
        <StarRating rating={props.rating} />
        <span className="">{props.date}</span>
  
        </div>
        <div className="col-4">
        <img className="avatar rounded-circle" src={avatar} alt="" />
        </div>
      </div>
  );
};

export default Review;
