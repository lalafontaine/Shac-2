import React from "react";
import { Link } from "react-router-dom";
import Donate from "./Donate";

export const Navbar = () => {
  return (
    // <!-- nav bar -->
    <nav className="navbar navbar-expand-lg bg-light mx-4 p-3 fixed-top">
      <div className="navbar-container container-fluid justify-content-end">
        {/* <!-- Brand --> */}
        <Link to="/">
          <h1 className="navbar-brand">AliveInL.A.</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Nav-bar content --> */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          {/* <!-- Donate --> */}
          {/* <Donate /> */}

          {/* <!-- Emergency Resources --> */}
          <button type="button" className="emergency-button btn btn-outline-danger me-1">
            Emergency Resources
          </button>

          {/* <!-- English/Spanish --> */}
          <div className=" btn-groups btn-group-toggle" data-toggle="buttons">
            <label className="translate-button btn btn-light">
              <input
                type="radio"
                name="options"
                id="option1"
                autocomplete="off"
                checked
              />{" "}
              English
            </label>
            <br />
            <label className="translate-button btn btn-light">
              <input
                type="radio"
                name="options"
                id="option2"
                autocomplete="off"
              />{" "}
              Español
            </label>
          </div>
{/* login button */}
          <button type="button" className="login-button btn btn-outline-primary">
            {" "}
            Login{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};
