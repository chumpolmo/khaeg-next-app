'use client';

import Link from "next/link";
import { shops } from "../data/shopItem";
import ShopSearch from "../components/ShopSearch";
import { Suspense } from 'react';
import Loading from "../components/Loading";

export default function ShopsPage() {

  return (
    <div className="max-w-3xl mx-auto mt-6">

      {/* Shop List */}
      <h1 className="text-3xl font-bold">
        Shop List
      </h1>

      {/* Shows skeleton fallback until SlowComponent finishes fetching data */}
      <Suspense fallback={<Loading />}>
        <ShopSearch shops={shops} />
      </Suspense>

    </div>
    
  );

}