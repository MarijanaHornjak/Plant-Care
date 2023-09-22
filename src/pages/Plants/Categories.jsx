import React from "react";
import { useFetchPlants } from "../../fetchPlants";
import "./Plants.scss";

const Categories = ({ handleFilterChange }) => {
  const { typeOfPlants } = useFetchPlants();
  // console.log(typeOfPlants);
  return (
    <div className="button-container">
      {typeOfPlants.map((type) => {
        return (
          <button
            type="button"
            key={type}
            className="type-btn"
            onClick={() => handleFilterChange(type)}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
