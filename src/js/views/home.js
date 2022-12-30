import React from "react";
import rigoImage from "../../images/rigo-baby.jpg";
import "../../styles/home.css";
import SimpleMap  from "../component/SimpleMap";


export const Home = () => {
   
    return (
        <div>
            <div className="">
		
		<div class="row">
            <div class="col-3">

            </div>
            {/* <!-- Search Bar--> */}
            <form class="d-flex col-6 my-4" role="search">
                <input class="form-control" type="search" placeholder="" aria-label="Search"/>
                <button class="btn btn-outline-secondary px-4" type="submit"><i class="fas fa-search"></i>
                </button>
            </form>
            <div class="d-flex col-3 " id="">

            </div>
        </div>

        {/* <!-- Search Results --> */}
        <div class="row mb-5">

            {/* <!-- List of Resources --> */}
            <div id="list_of_resources" class="col-4 pt-1 justify-content-between">

                {/* <!-- Selections --> */}
                <div id="filter-resources" class="row d-flex-inline">

                    {/* <!-- What type of resource--> */}
                    <div class=" m-2 col d-flex-inline" id="selection">

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="flexCheckChecked" value="" checked/>
                            <label class="form-check-label" for="flexCheckChecked">All resources</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="food" value="food"/>
                            <label class="form-check-label" for="food">Food</label>
                        </div>
                        <div class="form-checke">
                            <input class="form-check-input" type="checkbox" id="shelter" value="shelter"/>
                            <label class="form-check-label" for="shelter"> Shelter</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="health" value="health"/>
                            <label class="form-check-label" for="health">Health</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="hygiene" value="hygiene"/>
                            <label class="form-check-label" for="hygiene">Hygiene</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="children" value="children"/>
                            <label class="form-check-label" for="children">Resources for children</label>
                        </div>

                    </div>

                    {/* <!-- When Selection--> */}
                    <div class="m-2 col d-flex-inline" id="selection">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="flexCheckChecked" value="" checked/>
                            <label class="form-check-label" for="flexCheckChecked">Anytime</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="monday" value="monday"/>
                            <label class="form-check-label" for="monday">Monday</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="tuesday" value="tuesday"/>
                            <label class="form-check-label" for="tuesday">Tuesday</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="wednesday" value="wednesday"/>
                            <label class="form-check-label" for="wednesday">Wednesday</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="thursday" value="thursday"/>
                            <label class="form-check-label" for="thursday">Thursday</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="friday" value="friday"/>
                            <label class="form-check-label" for="friday">Friday</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="saturday" value="saturday"/>
                            <label class="form-check-label" for="saturday">Saturday</label>
                        </div>
                        <div class="form-check ">
                            <input class="form-check-input" type="checkbox" id="sunday" value="sunday"/>
                            <label class="form-check-label" for="sunday">Sunday</label>
                        </div>
                    </div>
                </div>

                {/* <!-- Card #1 --> */}
                <div class="card w-100 mt-4" style={{ width: "18rem"}}>
                    {/* <!-- Card header --> */}
                    <div id="header" class="d-flex flex-row justify-content-between">
                        {/* <!-- Resource number --> */}
                        <p class="m-3">1</p>
                        {/* <!-- Resource Title --> */}
                        <h4 class="card-title col-6 mt-4">Urban Partners</h4>
                        {/* <!-- Resource thumbnail --> */}
                        <img class="img-thumbnail w-25" src="images/urban_partners_logo.png" alt="Card logo"/>
                    </div>
                    {/* <!-- Card image --> */}
                    <img class="card-img-top px-2" src="images/urban_partners.jpg" alt="Card image cap"/>
                    {/* <!-- Card body --> */}
                    <div class="card-body">
                        <p class="card-text">Simple Resource Description.</p>
                        <a href="#" class="btn btn-primary">Learn More</a>
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

                {/* <!-- Card #2 --> */}
                <div class="card w-100 mt-4" style={{ width: "18rem"}}>
                    {/* <!-- Card header --> */}
                    <div id="header" class="d-flex flex-row justify-content-between">
                        {/* <!-- Resource number --> */}
                        <p class="m-3">2</p>
                        {/* <!-- Resource Title --> */}
                        <h4 class="card-title col-6 mt-4">Urban Partners</h4>
                        {/* <!-- Resource thumbnail --> */}
                        <img class="img-thumbnail w-25" src="images/urban_partners_logo.png" alt="Card logo"/>
                    </div>
                    {/* <!-- Card image --> */}
                    <img class="card-img-top px-2" src="images/urban_partners.jpg" alt="Card image cap"/>

                    {/* <!-- Card body --> */}
                    <div class="card-body">
                        <p class="card-text">Simple Resource Description.</p>
                        <a href="#" class="btn btn-primary">Learn More</a>

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

                {/* <!-- Card #3 --> */}
                <div class="card w-100 mt-4" style={{ width: "18rem"}}>
                    {/* <!-- Card header --> */}
                    <div id="header" class="d-flex flex-row justify-content-between">
                        {/* <!-- Resource number --> */}
                        <p class="m-3">3</p>
                        {/* <!-- Resource Title --> */}
                        <h4 class="card-title col-6 mt-4">Urban Partners</h4>
                        {/* <!-- Resource thumbnail --> */}
                        <img class="img-thumbnail w-25" src="images/urban_partners_logo.png" alt="Card logo"/>
                    </div>
                    {/* <!-- Card image --> */}
                    <img class="card-img-top px-2" src="images/urban_partners.jpg" alt="Card image cap"/>
                    {/* <!-- Card body --> */}
                    <div class="card-body">
                        <p class="card-text">Simple Resource Description.</p>
                        <a href="#" class="btn btn-primary">Learn More</a>
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

            {/* <!-- The map itself! --> */}
            <div id="list_of_resources" class="d-flex-inline col pt-3 me-2">
                <div id="googleMap" style={{width:"100%", height:"100vh"}}>

                    <SimpleMap/>

                </div>
            </div>

          
        </div>

    </div>
        </div>
    )
}

	

