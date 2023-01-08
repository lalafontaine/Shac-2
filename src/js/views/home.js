import React from "react";
import rigoImage from "/workspace/Shac-2/src/images/rigo-baby.jpg";
import "../../styles/home.css";
import SimpleMap from "../component/SimpleMap";
import { Link } from "react-router-dom";
import {Searchbar} from "../component/Searchbar";
import {Card} from "../component/Card"
import {Selection} from "../component/Selection";
import {Review} from "../component/Review";


export const Home = () => {
  return (
    <div >
      <div class = "p-5 m-5">

         {/* <!-- Search Bar--> */}
        <Searchbar/>

        {/* <!-- Selection--> */}
        <Selection/>

        {/* <!-- Search Results --> */}
        <div class="row mb-5">
          
          {/* <!-- List of Resources --> */}
          <div
            id="list_of_resources"
            class="col-4 pt-1 justify-content-between"
          >
              <Card  resName="Resource 1" resDescription="bla bla" rating="3" image="https://ibb.co/1Xjw9RS"/>

              <Card  resName="Resource 2" rating="2"/>

              <Card  resName="Resource 3" rating="1.5"/>
              
          </div>

          {/* <!-- The map itself! --> */}
          <div class="d-flex-inline col pt-3 me-2">
            <div id="googleMap" style={{ width: "100%", height: "100vh" }}>
              <SimpleMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
