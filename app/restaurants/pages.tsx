import Link from "next/link";

import RestaurantList from "./components/RestaurantList";
import { getRestaurants } from "./lib/api";

export default async function RestaurantsPage() {

  const restaurants = await getRestaurants();

  console.log(`${restaurants}`);

  return (

    <main className="min-h-screen bg-slate-200 p-6">

      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-6">

          <div>

            <h1 className="text-3xl font-bold">
              Restaurants
            </h1>

            <p className="text-gray-600">
              Sorted by Rating
            </p>

          </div>

          <Link
            href="/restaurants/new"
            className="bg-green-600 text-white px-4 py-3 rounded-lg"
          >
            + Add New
          </Link>

        </div>

        <RestaurantList
          restaurants={restaurants}
        />

      </div>

    </main>

  );

}