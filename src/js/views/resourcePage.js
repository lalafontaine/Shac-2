import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Review from "../component/Review";
import ResourceProfile from "../component/ResourceProfile";
import { Context } from "../store/appContext";
import { ResourceHeader } from "../component/ResourceHeader";
// import "../../styles/demo.css";

export const ResourcePage = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container mt-2">
      {/* <!-- Donate --> */}
      <button type="button" className="btn btn-outline-secondary">
        {" "}
        Back to search results
      </button>

      <ResourceHeader resName="Urban Partners" />

      <div className="res-profile-content row d-flex">
        <div className="col-6 justify-content-between">
          <ResourceProfile
            resName="Resource 1"
            resDescription="bla bla"
            resWebsite="555-5555"
            rating="3"
            profilePic="https://ibb.co/1Xjw9RS"
            about="Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Hic deleniti minus ducimus
            illo, iure earum enim labore cum! Labore neque sapiente
            temporibus praesentium! Velit, asperiores voluptatem possimus
            nulla excepturi ipsa.."
          />
        </div>
        <div className="col-6">
          <Review date="1/7/23" review="This place is the best!" rating="5" />
          <Review date="12/13/22" review="Get there early! bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla!" rating="4" />
          <Review date="11/4/22" review="Fresh produce!" rating="5" />
        </div>
      </div>
    </div>
  );
};