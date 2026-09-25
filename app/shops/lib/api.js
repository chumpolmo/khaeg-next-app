const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:3001";

export async function getShops() {

  const response = await fetch(
    `${API_URL}/api/shops`
  );

  console.log(`RESPONSE: ${response}`);

  if (!response.ok) {
    throw new Error("Failed to fetch shops");
  }

  return response.json();

}


export async function getShopById(id) {

  const response = await fetch(
    `${API_URL}/api/shops/${id}`
  );

  if (!response.ok) {
    throw new Error("Shop not found");
  }

  return response.json();

}


export async function createShop(data) {

  const response = await fetch(
    `${API_URL}/api/shops`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create Shop");
  }

  return response.json();

}


export async function updateShop(id, data) {

  const response = await fetch(
    `${API_URL}/api/shops/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update Shop");
  }

  return response.json();

}


export async function deleteShop(id) {

  const response = await fetch(
    `${API_URL}/api/shops/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete Shop");
  }

  return response.json();

}