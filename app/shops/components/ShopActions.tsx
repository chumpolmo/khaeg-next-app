"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { deleteShop } from "../lib/api";

export default function ShopActions({
  id,
}) {

  const router = useRouter();

  const handleDelete = async () => {

    const confirmed = window.confirm(
      "Are you sure you want to delete this shop?"
    );

    if (!confirmed) return;

    try {

      await deleteShop(id);

      router.refresh();

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <div className="flex flex-wrap gap-2 mt-4">

      <Link
        href={`/shops/${id}`}
        className="bg-blue-600 text-white px-3 py-2 rounded-lg"
      >
        View
      </Link>


      <Link
        href={`/shops/${id}/edit`}
        className="bg-yellow-500 text-white px-3 py-2 rounded-lg"
      >
        Update
      </Link>


      <button
        onClick={handleDelete}
        className="bg-red-600 text-white px-3 py-2 rounded-lg"
      >
        Delete
      </button>

    </div>

  );

}