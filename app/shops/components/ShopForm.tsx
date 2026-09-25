"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  createShop,
  updateShop,
} from "../lib/api"

export default function ShopForm({
  initialData = null,
  mode = "add",
}) {

  const router = useRouter();

  const [form, setForm] = useState({

    name: initialData?.name || "",
    cuisine: initialData?.cuisine || "",
    city: initialData?.city || "",
    rating: initialData?.rating ?? 0,
    reviewCount: initialData?.reviewCount ?? 0,
    priceLevel: initialData?.priceLevel ?? 1,
    imageUrl: initialData?.imageUrl || "",

  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =====================================
  // HANDLE INPUT
  // =====================================
  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm((prev) => ({

      ...prev,

      [name]: value,

    }));

  };


  // =====================================
  // SUBMIT
  // =====================================
  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);
    setError("");

    try {

      if (mode === "add") {

        await createShop(form);

      } else {

        await updateShop(
          initialData.id,
          form
        );

      }

      router.push("/shops");
      router.refresh();

    } catch (error) {

      setError(error.message);

    } finally {

      setLoading(false);

    }

  };


  return (

    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-sm space-y-4"
    >

      <h2 className="text-2xl font-bold">

        {mode === "add"
          ? "Add New Shop"
          : "Update Shop"}

      </h2>


      {error && (

        <p className="text-red-600">
          {error}
        </p>

      )}


      {/* Name */}
      <div>

        <label className="block font-semibold mb-1">
          Shop Name
        </label>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3"
        />

      </div>


      {/* Cuisine */}
      <div>

        <label className="block font-semibold mb-1">
          Cuisine
        </label>

        <input
          type="text"
          name="cuisine"
          value={form.cuisine}
          onChange={handleChange}
          required
          placeholder="Chinese"
          className="w-full border rounded-lg p-3"
        />

      </div>


      {/* City */}
      <div>

        <label className="block font-semibold mb-1">
          City
        </label>

        <input
          type="text"
          name="city"
          value={form.city}
          onChange={handleChange}
          required
          placeholder="London"
          className="w-full border rounded-lg p-3"
        />

      </div>


      {/* Rating */}
      <div>

        <label className="block font-semibold mb-1">
          Rating
        </label>

        <input
          type="number"
          name="rating"
          min="0"
          max="5"
          step="0.1"
          value={form.rating}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

      </div>


      {/* Review Count */}
      <div>

        <label className="block font-semibold mb-1">
          Review Count
        </label>

        <input
          type="number"
          name="reviewCount"
          min="0"
          value={form.reviewCount}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

      </div>


      {/* Price Level */}
      <div>

        <label className="block font-semibold mb-1">
          Price Level
        </label>

        <select
          name="priceLevel"
          value={form.priceLevel}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >

          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>

        </select>

      </div>


      {/* Image URL */}
      <div>

        <label className="block font-semibold mb-1">
          Image URL
        </label>

        <input
          type="url"
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
          className="w-full border rounded-lg p-3"
        />

      </div>


      {/* Buttons */}
      <div className="flex gap-3">

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg disabled:opacity-50"
        >

          {loading
            ? "Saving..."
            : mode === "add"
              ? "Add Shop"
              : "Update Shop"}

        </button>


        <button
          type="button"
          onClick={() => router.push("/shops")}
          className="bg-gray-300 px-5 py-3 rounded-lg"
        >
          Cancel
        </button>

      </div>

    </form>

  );

}