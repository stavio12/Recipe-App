import React, { useState, useEffect } from "react";
import Axios from "axios";
import SearchResults from "./SearchResults";

function Search() {
  const [recipeSearch, setRecipeSearch] = useState();
  const [result, setResult] = useState([]);

  const APP_ID = "#";
  const APP_KEY = "#";

  //Getting result from APi
  async function getRecipe(e) {
    e.preventDefault();
    const fetchData = await Axios.get(`https://api.edamam.com/search?q=${recipeSearch}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setResult(fetchData.data);
  }

  useEffect(() => {
    getRecipe();
  },[]);

  return (
    <>
      <form action="#" onSubmit={getRecipe} className="pb-5">
    
            <div className="form-inline offset-sm-1">
            <div className="col-12 col-sm-8 col-md-8 px-5 pb-3 pb-sm-0">
              <label className="sr-only" htmlFor="inlineFormInputGroup">
                Search
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">Recipes</div>
                </div>
                <input type="text" onChange={(e) => setRecipeSearch(e.target.value)} className="form-control text-center " id="inlineFormInputGroup" placeholder="Search for food" />
              </div>
            </div>

            <div className="col-12 col-sm-4 col-md-4 offset-5 offset-sm-0">
              <button type="submit" className="btn btn-lg btn-info">
                Search
              </button>
            </div>
          </div>
        
      </form>

      <SearchResults result={result} />
    </>
  );
}

export default Search;
