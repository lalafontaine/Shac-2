import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import logo from  "../../images/urban_partners_logo.png";

export const Card = (props)=>{
    return (
        <div class="card w-100 mt-4" style={{ width: "18rem" }}>
              {/* <!-- Card header --> */}
              <div id="header" class="d-flex flex-row justify-content-between">
                
                {/* <!-- Resource Title --> */}
                <h4 class="card-title col-6 mt-4">{props.resName}</h4>

                {/* <!-- Resource thumbnail --> */}
                <img
                  class="img-thumbnail w-25"
                  src={logo}
                  alt="Card logo"
                />

              </div>

              {/* <!-- Card image --> */}
              <img
                class="card-img-top px-2"
                src={props.resImg}
                alt="Card image cap"
              />
              {/* <!-- Card body --> */}
              <div class="card-body">
                <p class="card-text">{props.resDescription}</p>
                <Link to="/profile">
                  <a href={props.resWebsite} class="btn btn-primary">
                    Learn More
                  </a>
                </Link>

                {/* <!-- Star Rating --> */}
                <StarRating rating = {props.rating}/> 

              </div>
        </div>
    );
};