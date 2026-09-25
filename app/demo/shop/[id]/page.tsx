import Link from "next/link";
import { shops } from "../../data/shopItem";

export default async function ShopDetailPage({
  params,
}) {

  const { id } = await params;

  const shopView = shops.find(
    item => item.id === Number(id)
  );

  if (!shopView) {
    return (
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-bold">
          Shop Not Found
        </h1>

        <p className="my-4">
          *** ไม่พบ Shop ID: {id} ***
        </p>

        <Link 
          href="/demo/shop"
          className="bg-gray-600 text-white px-4 py-2 rounded"
        >
            Back
        </Link>
      </div>
    );
  }

  console.log(shopView);

  return (

    <div className="w-xl mx-auto p-6">

      <h1 className="text-3xl font-bold">
        Shop Detail
      </h1>

      <div
        key={id}
        className="border rounded-lg p-4 m-4"
      >
        <p className="mt-4 font-semibold">
          Shop ID: {id}
        </p>
        <p className="my-4">
          Title: {shopView.title}
        </p>
        <p className="my-4">
          Status: {shopView.status}
        </p>
      </div>

      <Link 
        href="/demo/shop"
        className="bg-gray-600 text-white px-4 py-2 rounded"
      >Back</Link>

    </div>

  );
}