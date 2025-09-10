import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  if (!plants) {
    return <p>Loading plants...</p>;
  }

  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          name={plant.name}
          image={plant.image}
          price={plant.price}
        />
      ))}
    </ul>
  );
}

export default PlantList;
