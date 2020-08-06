import React, { useState, useEffect } from "react";
import Search from "./Search";

function Cook() {
  const [search, setSearch] = useState(false);

  const searchToggle = () => setSearch(!search);

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className={search ? "container" : "container mt-5"}>
          <div className="row">
            <div className="col-12 col-sm-12 text-center col-md-5 mt-5 pb-4">
              <h1 className="display-3 mt-5">Learn Cooking</h1>
              <h4>Delicious and Quick Recipes</h4>
              <p className="lead ml-3">Explore 250+ Recipes.</p>
              <button onClick={searchToggle} className="btn btn-info px-5 ml-4 ">
                Let`s Cook
              </button>
            </div>
            <div className="col-12 col-sm-12 col-md-7">
              <img src="https://cdn.dribbble.com/users/2868735/screenshots/10749566/media/4cc2844cd71c155eda0548eea7c95961.png" className="img-fluid mh-100" alt="Responsive image" />
            </div>
          </div>
        </div>
      </div>
      {search ? <Search /> : search}
    </>
  );
}

export default Cook;
