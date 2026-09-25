import ShopForm from "../../components/ShopForm";
import { getShopById } from "../../lib/api";

export default async function EditShopPage({
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
      </div>
    );

  }

  return (

    <main className="min-h-screen bg-slate-200 p-6">

      <div className="max-w-2xl mx-auto">

        <ShopForm
          mode="edit"
          initialData={shop}
        />

      </div>

    </main>

  );

}