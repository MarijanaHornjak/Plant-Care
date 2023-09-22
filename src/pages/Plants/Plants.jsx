import React, { useState } from "react";
import { useFetchPlants } from "../../fetchPlants";
import "./Plants.scss";
import SinglePlant from "./SinglePlant";
import Categories from "./Categories";
const Plants = () => {
  const { loading, plants, typeOfPlants } = useFetchPlants();

  const [selectedType, setSelectedType] = useState("all");

  const handleFilterChange = (type) => {
    setSelectedType(type);
    // console.log(selectedType);
  };

  const filteredPlants =
    selectedType === "all"
      ? plants
      : plants.filter((plant) => plant.typeOfPlant === selectedType);

  // console.log(loading, plants);
  return (
    <main className="plants">
      <div className="container-center">
        <h1>Cultivating Green Dreams</h1>
        <h2 className="subtitle">
          Explore the World of Plant Growth and Horticulture
        </h2>
        <Categories handleFilterChange={handleFilterChange} />
        <section className="plants-section">
          {filteredPlants.map((plant) => {
            return <SinglePlant key={plant.id} plant={plant} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default Plants;
