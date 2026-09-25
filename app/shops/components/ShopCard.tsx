import ShopActions from "./ShopActions";

export default function ShopCard({
  shop,
}) {

  const {
    id,
    name,
    cuisine,
    city,
    rating,
    reviewCount,
    priceLevel,
    imageUrl,
  } = shop;

  return (

    <div className="bg-white rounded-xl overflow-hidden shadow-sm">

      {imageUrl && (

        <img
          src={imageUrl}
          alt={name}
          className="w-full h-64 object-cover"
        />

      )}

      <div className="p-4">

        <h2 className="text-xl font-semibold">
          {name}
        </h2>

        <div className="flex items-center gap-1 mt-2">

          <span className="text-yellow-400 text-xl">
            ★
          </span>

          <span className="font-semibold">
            {rating}
          </span>

          <span className="text-gray-400">
            ({reviewCount})
          </span>

        </div>

        <div className="flex justify-between mt-2">

          <p className="text-sm text-gray-700">
            {cuisine} | {city}
          </p>

          <p className="font-bold">
            {"$".repeat(Number(priceLevel) || 0)}
          </p>

        </div>

        <ShopActions id={id} />

      </div>

    </div>

  );

}