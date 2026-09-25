import ShopCard from "./ShopCard";

export default function ShopList({
  shops,
}) {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {shops.map((shop) => (

        <ShopCard
          key={shop.id}
          shop={shop}
        />

      ))}

    </div>

  );

}