import RestaurantForm from "../../components/RestaurantForm";
import { getRestaurantById } from "../../lib/api";

export default async function EditRestaurantPage({
  params,
}) {

  const { id } = await params;

  let restaurant;

  try {

    restaurant = await getRestaurantById(id);

  } catch (error) {

    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">
          Restaurant Not Found
        </h1>
      </div>
    );

  }

  return (

    <main className="min-h-screen bg-slate-200 p-6">

      <div className="max-w-2xl mx-auto">

        <RestaurantForm
          mode="edit"
          initialData={restaurant}
        />

      </div>

    </main>

  );

}