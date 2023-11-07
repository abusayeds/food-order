import { useContext, useState } from "react";
import { authContext } from "../Contexts/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBagShopping, faLockOpen, faTrashCan, faUndo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const OrderFoods = () => {

    let total = 0;
    const {itemlength} = useContext(authContext)
    const {hendeldelete} = useContext(authContext)
  //  const authcontextitem = useContext(authContext)
  //    const [itemlength, setitemlength] =useState(authcontextitem.itemlength)

    //  const hendeldelete = (id) => {
    // const remaingitem = itemlength.filter(item => item.category_id !== id)
    // setitemlength(remaingitem)
    //  }
   
    for( const item of itemlength){
        const price =parseFloat(item.price)
       total = total + price;
    }
       
 
    return (
        <div className="w-5/6 bg-white text-black mx-auto p-5 ">
           <div className="md:bg-slate-200 rounded md:w-4/6 md:p-6 md:m-auto">
             <div className="bg-white p-2 flex items-center rounded">
           
              <p> <FontAwesomeIcon  icon={faLockOpen}></FontAwesomeIcon> </p>
              <p  className="text-2xl ml-2 font-semibold" >  Foods order cart </p>
             </div>
            {
              itemlength.length === 0 && 
              <div className="flex items-center justify-center h-52">
                 
                 <div>
                     <div className="flex items-center justify-center ">
                      <p className="text-4xl bg-blue-200 text-blue-500 rounded-full px-6 py-5"><FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon></p>    
                     </div>
                     <div className="text-center w-5/6 m-auto">
                     <p className="text-2xl font-semibold">Opps !!! Your cart is empty</p>    
                    <p>No items added in your cart. Please add product to your cart list. <Link to='/' className="text-blue-500"> Back to Home</Link></p> 
                      </div>   
                 </div>

              </div>
             
            }
           <div>
           {
                itemlength.map(item => <div key={item.details}
                className=" md:grid grid-cols-2 hidden w-full  m-auto mt-5 p-2  rounded bg-white  "

                >

                  <div className="flex items-center">

                  <div>
                  <  img className="md:h-28 md:w-28 rounded" src={item.image_url} alt="" />
                  </div>
                   <div className="ml-10">
                   <p className="text-xl"> Name: {item.details}</p>
                    <p className="text-xl"> Price: {item.price} <small className="text-xl text-red-700">$</small></p>
                   
                   </div>

                  </div>

                  <div className="flex items-center justify-end ">
                   
                    <p onClick={() => hendeldelete(item.category_id)} className="bg-white p-2 rounded-full hover:text-red-600 text-red-500 text-4xl" > <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></p>
                  </div>
                </div> )
            }
             <div className="md:flex hidden text-white items-center justify-between bg-blue-500 mt-5 p-5 rounded ">
                <p>Proceed To Checkout</p>
                <p className="bg-white p-2 text-black rounded">Amount {total} $</p>
             
             </div>
           </div>
              
           </div>

            {/* ------small devise------- */}
            
          <div className="mb-10">
          {
              itemlength.map(item => <div key={item.details}
              className="md:hidden mt-5 mb-4  bg-slate-100 rounded"
              >

              <div>
                <img className="rounded" src={item.image_url} alt=""  />
              </div>

              <div className="flex items-center justify-between px-4 py-2">

              <div>
              <p className="text-xl"> Name: {item.details}</p>
              <p className="text-xl"> Price: {item.price} <small className="text-xl text-red-700">$</small></p>
              </div>

              <div className=" ">
                   
                   <p className="bg-slate-100 hover:text-red-700 text-red-500 text-2xl " > <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></p>
                 </div>
              </div>
             
              </div> )  
             }

             <div className="flex md:hidden text-white items-center justify-between bg-blue-500 mt-5 p-5 rounded ">
                <p>Proceed To Checkout</p>
                <p className="bg-white md:p-2 p-1 text-black rounded">Amount {total} $</p>
             
             </div>
          </div>


         

        </div>
    );
};

export default OrderFoods;