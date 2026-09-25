"use client";

import { useState } from "react";
import Link from "next/link";

export default function ShopSearch({ shops }) {

  const [keyword, setKeyword] = useState("");

  const filteredShops = shops.filter((shop) => {

    const {
      id, 
      title,
      status
    } = shop;

    const searchText = keyword.toLowerCase();

    return (
      title.toLowerCase().includes(searchText) ||
      status.toLowerCase().includes(searchText)
    );

  });

  return (
    <div className="max-w-3xl mx-auto p-6">

      {/* Search */}
      <div className="mb-6">

        <input
          type="text"
          value={keyword}
          onChange={(e) =>
            setKeyword(e.target.value)
          }
          placeholder="Search shop..."
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Result */}
      <div className="mb-4 text-gray-600">

        Found {filteredShops.length} shop(s)

      </div>

      <div className="space-y-4">

        {filteredShops.map((shop) => (

          <div
            key={shop.id}
            className="border rounded-lg p-4"
          >

            <h2 className="font-semibold">
              {shop.title}
            </h2>

            <p>
              Status: {shop.status}
            </p>

            <Link
              href={`/demo/shop/${shop.id}`}
              className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded"
            >
              View Detail
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}