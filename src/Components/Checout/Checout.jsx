import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLoaderData } from "react-router-dom";
import logo from '../../Image/download-removebg-preview.png'

function Checout() {
  const checoutitems = useLoaderData()
  const servises = checoutitems.option
  let price =0;
  for( const servise of servises){
    const total =parseFloat(servise.price)
    price= price+total
  }
  console.log(servises);
  return (
    
      <main className="md:w-5/6 mx-auto bg-slate-200 p-2 my-6 text-black ">
         <div className="flex items-center justify-between w-5/6 mx-auto bg-white rounded px-4 py-2 my-6">
          
         <h3 className="text-black font-bold ">{checoutitems.name}</h3>
         <img className="w-16" src={logo} alt="" />
         </div>
          <div className="w-5/6 m-auto  ">
            
           <div className="bg-white  p-4 ">
            <div className="flex justify-between">
                   <p>Chackout List</p>
                   <p className="bg-red-400 p-1 rounded hover:bg-red-500"> <Link to='/servise' className="text-black hover:text-black"> Go Back</Link></p>
              </div>     
             <hr className="w-full mt-2 " />
             {
              servises.map(servise => <div
              key={servise.id}
              className="md:grid grid-cols-2"
              >  
                <div className="grid grid-cols-2  justify-between mt-4"> 
                <div className="flex justify-center items-center">
                <img className="md:w-1/2 h-5/6" src={servise.img} alt="" />
                </div>
                <div className="text-start ml-2">
                  
                <p className="font-bold">{servise.name}</p>
                <span className="text-1xl">Lorem ipsum dolor sit  Qui, dicta.</span>
                <p className="text-red-500 font-semibold">{servise.price} $</p>
                </div>
                </div>
                <div className="md:flex hidden items-center justify-center">
                  <p>Servise on time</p>
                </div>

                       
              </div> )
              
             }
             <hr  className="w-full"/>
           </div>


           <div className="bg-red-500 mt-5 rounded  py-5">
            <div className="flex justify-between w-5/6 mx-auto">
              <p className="font-semibold">Checkout Total</p>
              <p className=" bg-white py-1 px-3 rounded ">Amount <span>{price }$</span></p>
            </div>
           </div>
          </div> 
          
      </main>
     
    
  );
}

export default Checout;
