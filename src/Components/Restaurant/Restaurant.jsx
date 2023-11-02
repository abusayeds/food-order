import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Restaurant() {
  const restaurantsData = useLoaderData()
  const restaurants = restaurantsData.option
  // console.log(restaurants);
  
const [items , setItems] = useState([])


useEffect(() => {
  fetch('http://localhost:5000/items')
  .then(res => res.json())
  .then(data => setItems(data))
},[])
// console.log(items);
  return (
   <main className="bg-white w-5/6 mx-auto md:my-4 md:p-10 ">
    <div className="flex justify-center md:gap-8 gap-2 p-2" >
    {
      items.map(item => <div
      key={item.id}
      className="text-black "
      >
     <p>{item.name}</p>
      </div> )
    }
    </div>
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
