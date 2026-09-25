const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:3001";

export async function getRestaurants() {

  const response = await fetch(
    `${API_URL}/api/restaurants`
  );

  console.log(`RESPONSE: ${response}`);

  if (!response.ok) {
    throw new Error("Failed to fetch restaurants");
  }

  return response.json();

}


export async function getRestaurantById(id) {

  const response = await fetch(
    `${API_URL}/api/restaurants/${id}`
  );

  if (!response.ok) {
    throw new Error("Restaurant not found");
  }

  return response.json();

}


export async function createRestaurant(data) {

  const response = await fetch(
    `${API_URL}/api/restaurants`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create restaurant");
  }

  return response.json();

}


export async function updateRestaurant(id, data) {

  const response = await fetch(
    `${API_URL}/api/restaurants/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update restaurant");
  }

  return response.json();

}


export async function deleteRestaurant(id) {

  const response = await fetch(
    `${API_URL}/api/restaurants/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete restaurant");
  }

  return response.json();

}