import React, { useState } from "react";

// Accept props from parent component
function PlantCard({ name, image, price }) {
  // Track if the plant is in stock
  const [isInStock, setIsInStock] = useState(true);

  // Toggle stock state on button click
  function handleStockToggle() {
    setIsInStock((prev) => !prev);
  }

  return (
    <li className="card" data-testid="plant-item">
      {/* Render plant image and name dynamically from props */}
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>

      {/* Button text and class change based on stock status */}
      <button 
        className={isInStock ? "primary" : ""}
        onClick={handleStockToggle}
      >
        {isInStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
