import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);

  // Fetch all plants from the server when the app first loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          console.error("Failed to fetch plants");
        }
      })
      .then((plantsData) => setPlants(plantsData))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} />
    </div>
  );
}

export default App;
