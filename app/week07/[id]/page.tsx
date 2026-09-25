// "use client"; 

import Link from "next/link";
import { shops } from "../components/shopItem";
import Loading from "../components/Loading";
import { Suspense } from "react";
// import { useState, useEffect } from "react";

export default async function ShopDetail({ params }){
  const { id } = await params;

  // const shop = shops.find(
  //    item => item.id === Number(id)
  // );

  // const [shop, setShop] = useState({});

  // useEffect(()=>{
  //   const fetchData = async() => {
  //     try {
  //       const resData = await fetch(`http://localhost:8009/${id}`);
  //       if(resData.ok){
  //         const resShop = await resData.json();
  //         setShop(resShop);
  //       } else {
  //         throw new Error(`Network response was not ok.`);
  //       }
  //     } catch(error) {
  //       console.log(`Error fetching data: ${error}`);
  //     }
  //   }
  //   fetchData();
  // },[shop]);
  let shop = {};
  try {
    const resData = await fetch(`http://localhost:8009/api/shops/${id}`);
    if(!resData.ok){
      throw new Error(`Network response was not ok.`);
    }
    shop = await resData.json();
    console.log(shop);
  } catch(error) {
    console.log(`Error fetching data: ${error}`);
  }

  return (
    <>
      <Suspense fallback={<Loading />}>
    <div className="w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold">
        Shop Detail
      </h1>

      <div
        key={shop.id}
        className="rounded-xl overflow-hidden shadow-sm m-4"
      >
        {/* <p className="mt-4 font-semibold">
          ID: {shop.id}
        </p> */}
        {shop.imageUrl && (
          <img
            src={shop.imageUrl}
            alt={shop.shopName}
            className="w-full h-64 object-cover"
          />
        )}

        <div className="p-3">
          <p className="my-4">
            Title: {shop.shopName}
          </p>
          <p className="my-4">
            Latitude: {shop.shopLoc?.lat} Longitude: {shop.shopLoc?.lon}
          </p>
          <p className="my-4">
            Open status: {shop.shopStatus ? "Open" : "Closed"}
          </p>
        </div>
      </div>

      <Link
        href="/week07"
        className="bg-gray-600 text-white px-4 py-2 rounded"
      >Back</Link>

    </div>
      </Suspense>
    </>
  );
}