import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		// <!-- nav bar -->
        <nav className="navbar navbar-expand-lg bg-light my-4">
            <div className="container-fluid justify-content-end">

                {/* <!-- Brand --> */}
                <h1 className="navbar-brand">Here4U L.A.</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

              
                {/* <!-- Nav-bar content --> */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                    {/* <!-- English/Spanish --> */}
                    <div className="btn-groups btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-light">
                            <input type="radio" name="options" id="option1" autocomplete="off" checked/> English
                        </label>
                        <label className="btn btn-light">
                            <input type="radio" name="options" id="option2" autocomplete="off"/> Español
                        </label>
                    </div>

                    {/* <!-- Donate --> */}
                    <button type="button" className="btn btn-outline-primary me-1">Donate</button>

                    {/* <!-- Emergency Resources --> */}
                    <button type="button" className="btn btn-outline-danger me-1">Emergency Resources</button>

                    {/* <!-- Login --> */}
                    <button type="button" className="btn btn-outline-primary"> Login </button>
                </div>
            </div>
        </nav>
	);
};
