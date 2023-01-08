import React from "react";
import avatar from "../../images/cardiB.jpg";
import StarRating from "./StarRating";

const Review = () => {
  return (
    <div class="col">
      <div class="d-flex mt-4 row">
        <div class="col ps-5">
          <span class="">This place is the best! </span>
          <span class="">11/13/21 </span>
          <StarRating />
        </div>
        <div class="col-3 d-flex justify-content-center">
          <img class="avatar rounded-circle" src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Review;
