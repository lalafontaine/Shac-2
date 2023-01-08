import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const ProfilePage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			
			{/* <!-- Business Profile Page  --> */}
    <div class="row m-5 p-1 justify-content-between">
        {/* <!-- Business Info --> */}
        <div id="list_of_resources" class="col-6 pt-1 justify-content-between">
            <div class="card w-100 mt-4" style={{width: "18rem"}}>

                {/* <!-- Card header --> */}
                <div id="header" class="d-flex flex-row justify-content-between">

                    {/* <!-- Resource Title --> */}
                    <h4 class="card-title col-6 mt-4 p-5">Urban Partners</h4>

                    {/* <!-- Resource thumbnail --> */}
                    <img class="img-thumbnail w-25" src="images/urban_partners_logo.png" alt="Card logo"/>
                </div>

                {/* <!-- Card image --> */}
                <img class="card-img-top px-2" src="images/urban_partners.jpg" alt="Card image cap"/>

                {/* <!-- Card text body --> */}
                <div class="card-body">

                    {/* <!-- operating hours --> */}
                    <p class="p-2"><strong>Hours: </strong> Monday - Friday, 7:00a.m.- 4:30p.m.</p>
                    <p class="p-2"><strong>Address: </strong> 555 N Sunset Blvd. 90026</p>
                    <p class="p-2"><strong>Phone: </strong> 213-555-5555</p>
                    <p class="p-2"><strong>Website: </strong> <a href="https://urbanpartnersla.org"> https://urbanpartnersla.org/ </a></p>
                    <p class="p-2"> <strong>About this resource: </strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic deleniti minus ducimus illo, iure earum enim labore cum! Labore neque sapiente temporibus praesentium! Velit, asperiores voluptatem possimus nulla excepturi ipsa..</p>
                    
                    {/* <!-- Star Rating --> */}
                    <div class="d-flex flex-row justify-content-end">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Reviews --> */}
        <div class="col-6 mt-4 d-flex justify-content-end">
            <div>
                <img class="w-25 rounded-circle" src="images/cardi-b.jpg" alt=""/>
                <p> Cardi B.</p>
            </div>
            <div>
                <p>Review 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iusto corrupti odit unde, vel cum repudiandae numquam veniam nobis quas nisi ratione maiores, vitae sequi. Suscipit eligendi ipsa laudantium. Architecto.</p>
            </div>
        </div>


    
    </div>


		</div>
	);
};
