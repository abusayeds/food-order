import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../Contexts/Context";
import Cart from "../Cart/Cart";


function Restaurant() {
  const {findFoods} = useContext(authContext)
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

const addFoods = (restaurant) => {
  findFoods(restaurant)
}


  return (
   <main className="bg-white w-5/6 mx-auto md:my-4 md:p-10 ">
     <div className="text-black md:grid grid-cols-3 md:gap-4  ">
    {
      restaurants.map( restaurant => <div

        onClick={() => addFoods(restaurant)  }
      key={restaurant.details}

      className="m-5 bg-slate-100 rounded "
      
      >
        {
          <img className="w-full h-52 rounded" src={restaurant.image_url} alt=""  />
        }
        <div  className="flex items-center justify-between py-2 px-4 ">
          <div className="flex items-center">
          <p className="">{restaurant.details}</p>
          </div>
        <div>
        <p className="text-red-600 font-bold">{restaurant.price} $ <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p>
        </div>
        
        </div>
      </div> )
    }
    </div>
    <Cart></Cart>
   
   </main>
  );
}

export default Restaurant;
