import React, { useState, useEffect } from "react";
import Ingredients from "./Ingredients";

function RecipeCard({ recipe }) {
  // console.log("recipe", recipe);
  const [ingredient, setIngredients] = useState([]);

  useEffect(() => {
    recipe.map((data) => setIngredients(data.recipe.ingredientLines));
  }, []);

  return (
    <>
      <div className="card-group">
        <div className="row">
          {recipe.map((recipes, key) => {
            return (
              <div key={key} className="col-12 col-sm-6 col-md-6 col-lg-4 pb-5 mh-100">
                <div className="card ">
                  <img src={recipes.recipe.image} className="card-img-top" alt="..." />
                  <div className="card-body text-center">
                    <h2 className="card-title title">{recipes.recipe.label}</h2>
                    <h5 className="card-title">
                      <small className="text-muted">
                        {" "}
                        Health: <span className="font-weight-bold">{recipes.recipe.healthLabels}</span>{" "}
                      </small>
                    </h5>
                    <h5 className="card-title">
                      <small className="text-muted">
                        {" "}
                        Diet: <span className="font-weight-bold">{recipes.recipe.dietLabels}</span>{" "}
                      </small>
                    </h5>
                    <Ingredients ingredient={ingredient} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
