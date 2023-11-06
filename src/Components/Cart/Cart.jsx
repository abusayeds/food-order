import { useContext, useEffect, useState } from "react";
import { authContext } from "../Contexts/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faX } from "@fortawesome/free-solid-svg-icons";


const Cart = () => {

 
  

// const {items } = useContext(authContext)
 
const authcontext = useContext(authContext)
const {findfoodlength} =useContext(authContext)

const [fooditem , setfooditem] = useState(authcontext.items)
  useEffect ( () => {
    setfooditem(authcontext.items)
  } ,[authcontext.items])

const [catritems , setCartItems] = useState([])


 const hendelitemlength = (item) =>{
    alert('succecefly added')
    setCartItems(item)
    findfoodlength(item)

    
 } 

  return (
    <div  >
      {
     fooditem .map(item => <div
          className=" group fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm justify-center items-center flex"
        key={item.category_id}>
       <div className="bg-white md:grid grid-cols-2 p-3 rounded gap-3 md:h-4/6 md:w-4/6 relative ">
         <div>
          
          <img className="h-full w-full rounded" src={item.image_url} alt=""  />
         </div>

        <div className=" text-black items-start p-2"> 
          <p className="font-bold text-2xl" >{item.details} </p>
          <div className="flex justify-center mt-2 bg-slate-100 rounded-full w-28 p-1">
            <small className="text-blue-400">Stock :</small>   <small className="text-red-500 ml-1">available</small>
          </div>
          <p className="text-3xl mt-2 font-semibold" > $ {item.price}</p>
           <div className="md:flex items-center justify-between mt-4">
            <p className="font-medium">Quality : Fresh_Food</p>
           <div className="mt-4  md:w-4/6">
           <button className="bg-blue-400 md:w-4/5 "  onClick={() =>  hendelitemlength(item) }> Add to cart</button>
           <button className="md:absolute top-0 right-0 bg-red-400 hover:bg-red-500 hover:text-white ml-8" onClick={() => setfooditem([])}> <FontAwesomeIcon icon={faX}></FontAwesomeIcon></button></div>
           </div>
           <div className="flex items-center justify-center mt-10">
           <p className="text-red-600">Eat healthy food <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> to be always good</p>
           </div>
           </div>
       
       </div>

        </div> )
      }
     
     
    </div>
  );
};

export default Cart;
