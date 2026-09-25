import RestaurantForm from "../components/RestaurantForm";

export default function NewRestaurantPage() {

  return (

    <main className="min-h-screen bg-slate-200 p-6">

      <div className="max-w-2xl mx-auto">

        <RestaurantForm mode="add" />

      </div>

    </main>

  );

}