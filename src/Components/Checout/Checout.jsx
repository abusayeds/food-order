import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoaderData } from "react-router-dom";
import img from '../../Image/depositphotos_254046202-stock-photo-happy-male-indian-chef-in.jpg'

function Checout() {
  const checoutitems = useLoaderData()
  const servises = checoutitems.option
  console.log(servises);
  return (
    
      <main className="w-5/6 mx-auto bg-white mt-5 text-black">
          <h2 className="text-start text-4xl font-bold ml-5 text-red-400"> <FontAwesomeIcon icon={faCheck }></FontAwesomeIcon>chekout</h2>
          <h1 className="text-black text-center">{checoutitems.name}</h1>
          <div className="px-4">
            <h4 className="font-bold">Shipping adderess </h4>
            <div className="mt-5 flex px-4">
              <div className="w-16 h-16 ">
                <img className="rounded-full py-1 " src={img} alt="" />
              </div>
              <div className="ml-4">
                
              <li>Anna tori </li>
              <li>Phone: 0087******* </li>
              <li>Email: annatori@gmail.com</li>
              <li>town : ******</li>
              </div>
            </div>
          </div>
          {
            servises.map(servise => <div
            key={servise.id}
            >

              <div>
                <p>{servise.name}</p>
                <p>price: {servise.price}</p>
                <img src={servise.img} alt="" />
              </div>
            </div> )
          }
      </main>
     
    
  );
}

export default Checout;
