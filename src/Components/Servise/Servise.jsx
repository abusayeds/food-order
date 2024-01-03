import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Servise() {
  const [servises, setServises] = useState([])
  useEffect( () => {
    fetch('http://localhost:5000/servises')
    .then(res => res.json())
    .then(data => setServises(data))
  },[])
  
  return (
    <div className=" w-5/6 m-auto text-black my-5  ">
      <div className="text-center w-1/2 m-auto">
        <p className=" text-red-400 font-bold">Servises</p>
        <p className="text-5xl font-semibold"> Our Servise Area</p>
        <p className="mt-8">Counter service is food ordered by the customer at the counter and either picked up at the counter by the customer or delivered to the table by restaurant staff </p>
      </div>
    <div className="md:grid grid-cols-3 md:gap-4">
    {
      servises.map( servise => <div

          
      key={servise.id}

      className="m-5 bg-slate-100 rounded "
      
      >
        {
          <img className="w-full h-52 rounded" src={servise.img} alt=""  />
        }
        <div  className="flex items-center justify-between py-2 px-4 ">
          <div className="flex items-center">
          <p className="font-semiboldx">{servise.name}</p>
          </div>
        <div>
        <p className=" bg-red-400 hover:animate-bounce p-1 rounded    "><Link to= {`${servise.id}`} className="text-black hover:text-black">Checout</Link> <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </p>

        </div>
        
        </div>
        
      </div> )
    }
    </div>
    </div>
  );
}

export default Servise;
