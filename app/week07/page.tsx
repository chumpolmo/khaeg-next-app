import { Suspense } from "react";
// import { shops } from "./components/shopItem";
import Loading from "./components/Loading";
import ShopList from "./components/ShopList";
import Footer from "./components/Footer";

export default async function ShopPage() {

   let shops = {};
   try {
     const resData = await fetch(`http://localhost:8009/api/shops/`);
     if(!resData.ok){
      throw new Error(`Network response was not ok.`);
     }
     shops = await resData.json();
     console.log(shops);
   } catch(error) {
     console.log(`Error fetching data: ${error}`);
   }

   return (
      <div className="max-w-full mx-auto mt-6">

         <Suspense fallback={<Loading />}>
            <ShopList data={shops} />
         </Suspense>

         <Footer />

      </div>
   );

}