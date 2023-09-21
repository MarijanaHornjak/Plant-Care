import React from "react";
import { useFetchPlants } from "../../fetchPlants";
import "./Plants.scss";
import SinglePlant from "./SinglePlant";

const Plants = () => {
  const { loading, plants } = useFetchPlants();
  console.log(loading, plants);
  return (
    <main className="plants">
      <div className="container-center">
        <h1>Cultivating Green Dreams</h1>
        <h2 className="subtitle">
          Explore the World of Plant Growth and Horticulture
        </h2>
        <section className="plants-section">
          {plants.map((plant) => {
            return <SinglePlant key={plant.id} plant={plant} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default Plants;
