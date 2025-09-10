import React, { useState } from "react";

// NewPlantForm is a controlled form component for adding a new plant to the backend and frontend UI.
function NewPlantForm({ onAddPlant }) {
  // State for tracking the plant's name, image URL, and price from user input
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  // Handles form submission by posting the new plant to the backend and resetting input fields
  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      name,
      image,
      price: parseFloat(price), // ensures price is stored as a number
    };

    // Send a POST request to the backend to create a new plant
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error("Failed to create plant");
        }
      })
      .then((createdPlant) => {
        onAddPlant(createdPlant); // Notify parent component of the new plant
        setName(""); // Clear form inputs
        setImage("");
        setPrice("");
      })
      .catch((error) => console.error("Error:", error));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      {/* Form to input plant name, image URL, and price. On submission, sends POST request. */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
