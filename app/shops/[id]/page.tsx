import Link from "next/link";

import { getShopById } from "../lib/api"

export default async function ShopDetailPage({
  params,
}) {

  const { id } = await params;

  let shop;

  try {

    shop = await getShopById(id);

  } catch (error) {

    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">
          Shop Not Found
        </h1>

        <Link
          href="/shops"
          className="text-blue-600 underline"
        >
          Back to Shops
        </Link>
      </div>
    );

  }

  const {
    name,
    cuisine,
    city,
    rating,
    reviewCount,
    priceLevel,
    imageUrl,
  } = shop;

  return (

    <main className="min-h-screen bg-slate-200 p-6">

      <div className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden shadow-sm">

        {imageUrl && (

          <img
            src={imageUrl}
            alt={name}
            className="w-full h-80 object-cover"
          />

        )}

        <div className="p-6">

          <h1 className="text-3xl font-bold">
            {name}
          </h1>

          <p className="mt-2 text-gray-600">
            {cuisine} | {city}
          </p>

          <div className="mt-4">
            ★ {rating} ({reviewCount} reviews)
          </div>

          <p className="mt-3 font-semibold">
            {"$".repeat(Number(priceLevel) || 0)}
          </p>

          <div className="flex gap-3 mt-6">

            <Link
              href={`/shops/${shop.id}/edit`}
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
            >
              Update
            </Link>

            <Link
              href="/shops"
              className="bg-gray-700 text-white px-4 py-2 rounded-lg"
            >
              Back
            </Link>

          </div>

        </div>

      </div>

    </main>

  );

}