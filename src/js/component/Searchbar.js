import React from "react";

export const Searchbar = () => {
    return (
        <div class="row">
        <form class="d-flex col-6 my-4" role="search">
          <input
            class="form-control"
            type="search"
            placeholder=""
            aria-label="Search"
          />
          <button class="btn btn-outline-secondary px-4" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    )
} 
