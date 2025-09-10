import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error(`Failed to fetch plants. Status: ${r.status}`);
        }
      })
      .then((plantData) => {
        setPlants(plantData); // ✅ sets initial plant data
      })
      .catch((error) => {
        console.error("Error fetching plants:", error);
      });
  }, []);

  // Callback function to add a new plant to the list
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  return (
    <main>
      {/* Pass onAddPlant to NewPlantForm so it can notify when a new plant is added */}
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
