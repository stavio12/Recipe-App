import React, { useState, useEffect } from "react";

function Ingredients({ ingredient }) {
  return (
    <>
      <ul className="list-group list-group-flush">
        {[ingredient].map((list, key) => (
          <li key={key} className="list-group-item py-5">
            {list}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Ingredients;
