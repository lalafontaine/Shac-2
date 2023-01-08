import React from "react";


export const Selection = () => {
  return (
    <div id="filter-resources" class="row d-flex-inline">

      {/* <!-- What type of resource--> */}
      <div class=" m-2 col d-flex-inline" id="selection">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexCheckChecked"
            value=""
            checked
          />
          <label class="form-check-label" for="flexCheckChecked">
            All resources
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="food"
            value="food"
          />
          <label class="form-check-label" for="food">
            Food
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="shelter"
            value="shelter"
          />
          <label class="form-check-label" for="shelter">
            Shelter
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="health"
            value="health"
          />
          <label class="form-check-label" for="health">
            Health
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="hygiene"
            value="hygiene"
          />
          <label class="form-check-label" for="hygiene">
            Hygiene
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="children"
            value="children"
          />
          <label class="form-check-label" for="children">
            Resources for children
          </label>
        </div>
      </div>

      {/* <!-- When ? --> */}
      <div class="m-2 col d-flex-inline" id="selection">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexCheckChecked"
            value=""
            checked
          />
          <label class="form-check-label" for="flexCheckChecked">
            Anytime
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="monday"
            value="monday"
          />
          <label class="form-check-label" for="monday">
            Monday
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="tuesday"
            value="tuesday"
          />
          <label class="form-check-label" for="tuesday">
            Tuesday
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="wednesday"
            value="wednesday"
          />
          <label class="form-check-label" for="wednesday">
            Wednesday
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="thursday"
            value="thursday"
          />
          <label class="form-check-label" for="thursday">
            Thursday
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="friday"
            value="friday"
          />
          <label class="form-check-label" for="friday">
            Friday
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="saturday"
            value="saturday"
          />
          <label class="form-check-label" for="saturday">
            Saturday
          </label>
        </div>
        <div class="form-check ">
          <input
            class="form-check-input"
            type="checkbox"
            id="sunday"
            value="sunday"
          />
          <label class="form-check-label" for="sunday">
            Sunday
          </label>
        </div>
      </div>
    </div>
  );
};
