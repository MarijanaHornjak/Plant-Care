import React from "react";
import { BsSun } from "react-icons/bs";
import { IoIosWater } from "react-icons/io";
import { LuShovel } from "react-icons/lu";
import "./Plants.scss";

const SinglePlant = ({ plant }) => {
  const {
    id,
    img,
    latinName,
    name,
    environmentRules,
    plantingRules,
    typeOfPlant,
    wateringRules,
  } = plant;
  return (
    <article className="single-plant">
      <div className="plant-image-container">
        <img src={img} alt={name} />
      </div>
      <div className="plant-info-container">
        <h2>{name}</h2>
        <h3>{latinName}</h3>
        <div className="plant-info">
          <div className="single-info">
            <BsSun className="plant-icon" />
            <p>{environmentRules}</p>
          </div>
          <div className="single-info">
            <IoIosWater className="plant-icon" />
            <p>{wateringRules}</p>
          </div>
          <div className="single-info">
            <LuShovel className="plant-icon" />

            <p>{plantingRules}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SinglePlant;
