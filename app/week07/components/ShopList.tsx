"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UserProfile from "../components/UserProfile";
import LogoutButton from "../components/Logout";
import LoginButton from "../components/Login";

export default function ShopList({ data }){

   const router = useRouter();
   const [keyword, setKeyword] = useState("");
   let storedUser = "";
   if (typeof window !== 'undefined') {
    storedUser = localStorage.getItem("user");
   }

   const filterShops = data.filter(
    (item) => {
      const searchText = keyword.toLowerCase();
      return item.shopName.toLowerCase().includes(searchText)
    }
   );

  const handleDelete = async (id) => {

    const confirmed = window.confirm(
      "Are you sure you want to delete this shop?"
    );

    if (!confirmed) return;

    try {

      const response = await fetch(
        `http://localhost:8009/api/shops/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete Shop");
      }

      router.refresh();

    } catch (error) {

      alert(error.message);

    }

  };

   const addNewShop = async(e) => {
     e.preventDefault();
      try {
         const response = await fetch(`http://localhost:8009/api/addshop`, 
         {
            method: 'POST',
            headers: {
             'Content-Type': 'application/json',
            },
            body: "",
         });

         if (response.ok) {
           const data = await response.json();
           alert(`Added new shop successfully.`);
           //router.push("/week07");
           router.refresh();
         } else {
           alert('Failed to submit form.');
         }
     } catch (error) {
	     alert(`An error occurred while submitting the form.`);
     }
   };

   return (
        <div className="w-full ma-auto p-6">
          <h1 className="flex justify-center text-3xl font-bold pb-8 border-b border-slate-500">
            Shop List
          </h1>
            {
              storedUser ? 
              <div className="flex justify-between items-center">
                <Link
                  href="/week07/new"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  + Add New
                </Link>
                <div className="flex justify-end items-center">
                  <main className="p-6">
                    <UserProfile />
                  </main>
                  <LogoutButton />
                </div>
              </div>:
              <div className="flex justify-end items-center">
                <LoginButton />
              </div>
            }

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

          {/* <div className="mb-4 text-gray-600">
            <form method="POST" onSubmit={addNewShop}>
            <button
              type="submit"
              className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add new shop
            </button>
            </form>
          </div> */}

          <div className="mb-4 text-gray-600">
            Found {filterShops.length} shop(s)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            filterShops.map(shop => (
              <div key={shop.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
                {shop.imageUrl && (

                  <img
                    src={shop.imageUrl}
                    alt={shop.shopName}
                    className="w-full h-64 object-cover"
                  />

                )}
                <h2 className="font-semibold p-3">
                  {shop.shopName}
                </h2>
                <p className="p-3">Open Status: 
                  {
                    shop.shopStatus ? 
                    <span className="ms-2 bg-green-100 text-green-800 text-m font-bold px-3 py-2 rounded-full">Open</span> 
                    : 
                    <span className="ms-2 bg-red-100 text-red-800 text-m font-bold px-3 py-2 rounded-full">Closed</span>
                  }</p>
                <div className="flex flex-wrap gap-2 mt-4 p-3">
                <Link
                  href={`/week07/${shop.id}`}
                  className="bg-blue-500 text-white px-3 py-2 rounded-lg"
                >
                View Detail
                </Link>
                {
                storedUser ?
                <>
                  <Link
                    href={`/week07/${shop.id}/edit`}
                    className="bg-yellow-500 text-white px-3 py-2 rounded-lg"
                  >
                    Update
                  </Link>
                  <button
                    onClick={(e)=>handleDelete(`${shop.id}`)}
                    className="bg-red-500 text-white px-3 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </>
                :<></>
                }
                </div>
              </div>              
            ))
          }

          </div>

        </div>
   );

}