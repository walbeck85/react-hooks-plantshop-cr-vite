# Phase 2 Code Challenge: Plantsy

## Demo

Use this gif as an example of how the app should work.

![Demo GIF](./demo.gif)

## Instructions

Welcome to Plantsy! You've been tasked with building out some features for the
admin side of a plant store. The designers have put together the components and
CSS. Now it's up to you to bring the features to life by adding stateful logic
as well as persisting data to the backend via our API.

Your job will be to make our app work according to the user stories you will
find the [Deliverables](#Deliverables) section.

## Setup

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `6001`.
3. In a new terminal, run `npm run dev`.

Make sure to open [http://localhost:6001/plants](http://localhost:6001/plants)
in the browser to verify that your backend is working before you proceed!

## Endpoints

The base URL for your backend is: `http://localhost:6001`

## Deliverables

As a user:

1. When the app starts, I can see all plants.
2. I can add a new plant to the page by submitting the form.
3. I can mark a plant as "sold out".
4. I can search for plants by their name and see a filtered list of plants.

### Endpoints for Core Deliverables

#### GET /plants

Example Response:

```json
[
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  },
  {
    "id": 2,
    "name": "ZZ Plant",
    "image": "./images/zz-plant.jpg",
    "price": 25.98
  }
]
```

#### POST `/plants`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "name": "string",
  "image": "string",
  "price": number
}
```

Example Response:

```json
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99
}
```

## Task 1: Define the Problem

The frontend of the application is currently not connected to the backend. We need to connect the two through fetch requests. As a user, one should be able to:

- See all plants on page load.
- Add a new plant to the page by submitting the form.
- Mark a plant as "sold out".
- Search for plants by their name and see a filtered list of plants.

## Task 2: Determine the Design

Below is a breakdown of the state, props, and responsibilities for each component.

### `<App />`
- **State**: 
  - `plants` (array of all plant objects)
  - `searchTerm` (string for filtering plants)
- **Props Passed**: 
  - `plants` and setter functions to child components
- **Responsibilities**:
  - Fetch all plants on page load
  - Maintain global state for plant data and search input

### `<PlantList />`
- **Props Received**:
  - `plants` (array of filtered plants)
  - `onSoldOut` (callback to toggle sold out status)
- **Responsibilities**:
  - Render a list of `<PlantCard />` components

### `<PlantCard />`
- **Props Received**:
  - `plant` (object)
  - `onSoldOut` (callback function)
- **Responsibilities**:
  - Display individual plant details
  - Trigger "sold out" status change

### `<NewPlantForm />`
- **State**:
  - `name`, `image`, `price` (controlled inputs)
- **Props Received**:
  - `onAddPlant` (callback to add new plant to state/backend)
- **Responsibilities**:
  - Handle form submission
  - Send POST request to add plant
  - Clear form on submit

### `<Search />`
- **State**:
  - `searchTerm` (string input)
- **Props Received**:
  - `onSearch` (callback to update filter)
- **Responsibilities**:
  - Capture user input for search
  - Trigger filtering of displayed plants
