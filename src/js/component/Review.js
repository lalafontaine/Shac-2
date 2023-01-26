import React from "react";
import avatar from "../../images/cardiB.jpg";
import StarRating from "./StarRating";

const Review = (props) => {
  return (
    <div className="review d-flex justify-content-end row align-items-center">
      <img className="avatar rounded-circle" src={avatar} alt="" />
      <div className="col">
        <StarRating rating={props.rating} />
        <p>{props.review}</p>
        <span className="">{props.date}</span>
      </div>
    </div>
  );
};

export default Review;
