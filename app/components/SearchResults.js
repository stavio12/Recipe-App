import React, { usetate, useEffect } from "react";
import RecipeCard from "./RecipeCard";

function SearchResults({ result }) {
  return (
    <>
      {[result.hits].map((recipe, key) => {
        if (recipe !== undefined) {
          return <RecipeCard key={key} recipe={recipe} />;
        }
      })}
    </>
  );
}

export default SearchResults;
