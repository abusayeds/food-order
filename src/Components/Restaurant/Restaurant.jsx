import { useLoaderData } from "react-router-dom";


function Restaurant() {
  const restaurantsData = useLoaderData()
  const restaurants = restaurantsData.option
  // console.log(restaurants);
  return (
   <main className="bg-white w-5/6 mx-auto md:my-4 md:p-10 ">
     <div className="text-black md:grid grid-cols-3 md:gap-4  ">
    {
      restaurants.map( restaurant => <div
      key={restaurant.id}

      className="m-5 bg-slate-100 rounded "
      
      >
        {
          <img className="w-full h-52 rounded" src={restaurant.image_url} alt=""  />
        }
        <div className="flex items-center justify-between py-2 px-4 ">
          <p className="">{restaurant.details}</p>
        <p className="text-red-600 font-bold">{restaurant.price} $</p>
        </div>




      </div> )
    }
    </div>
    
   </main>
  );
}

export default Restaurant;
