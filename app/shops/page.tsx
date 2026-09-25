import Link from "next/link";

import ShopList from "./components/ShopList";
import { getShops } from "./lib/api";

export default async function ShopsPage() {

  const shops = await getShops();

  console.log(`${shops}`);

  return (

    <main className="min-h-screen bg-slate-200 p-6">

      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-6">

          <div>

            <h1 className="text-3xl font-bold">
              Shops
            </h1>

            <p className="text-gray-600">
              Sorted by Rating
            </p>

          </div>

          <Link
            href="/shops/new"
            className="bg-green-600 text-white px-4 py-3 rounded-lg"
          >
            + Add New
          </Link>

        </div>

        <ShopList
          shops={shops}
        />

      </div>

    </main>

  );

}