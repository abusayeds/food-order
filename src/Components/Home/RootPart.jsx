
import { Link } from "react-router-dom";
import './Home.css'



const RootPart = () => {
  
  
  return (
     <main className="w-5/6 m-auto text-black">
      
       <div className='header1 text-black flex items-center justify-center mt-10 '>
       <div className=' flex items-center justify-center'>
       <div>
       <div className='text-center'>
       <p className='text-4xl font-bold '>WELCOME TO ROODFRISS</p>
       <p className='text-1xl font-semibold text-center mt-2'>SERVE ONLY THE FERSHEST INGREDIENTS</p>
        </div>
       <div className='flex items-center justify-center mt-5'>
       <button className='border-green-700 '> <Link to='/home' className=" text-black">Seen Our items</Link></button>
      </div>
       </div>
      </div>
      </div>


      <div className="md:grid grid-cols-2 gap-2 my-20 mt-5">
        <div className="bg-slate-50 rounded flex items-center justify-center p-5 h-80  ">
          <div>
          <div className="text-center">
            <p> Sometimes you lose a battle. But mischief always wins the war</p> 
            <p className="font-bold text-xl"> "Be the chife but never the lord"</p>
           </div>
           <div className=" flex justify-center mt-10 ">
           <img className=" chife-pic rounded-full w-36 h-32  " src="https://st4.depositphotos.com/1017986/25404/i/450/depositphotos_254046202-stock-photo-happy-male-indian-chef-in.jpg" alt=""  />
          </div>
          <p className="text-center text-2xl text-red-600">Anna Toylor</p>
          <p className="text-center ">Head Chife</p>
          </div>
        </div>
        <div className="w-full md:flex hidden   ">
          <img className="w-full h-80 rounded " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZcKVams1fnVL3224ZJ2xEtBeUs6P_ZJiZw&usqp=CAU" alt="" />
        </div>
        </div>

     
     <p className="text-center text-4xl font-bold my-10">Our other chife</p>
     <div className=" md:grid grid-cols-4  gap-3 my-20  ">
            
     <div className=" group md:relative mt-3 ">
      <div className=" h-52 overflow-hidden">
      <img className="h-80 w-full" src="https://img.freepik.com/premium-photo/chef-hotel-restaurant-kitchen-cooking_972290-3919.jpg" alt="" />

     <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
     <Link to='/home' className=" text-white bg-blue-500 p-2 hover:bg-blue-600 rounded  hover:text-white ">Seen Our items</Link>
     </div>
     </div>
     <div className="bg-yellow-500 text-center text-xl"> 
        <p >First Chife</p>
      </div>
    </div>


     <div className=" group md:relative mt-3">
      <div className=" h-52  overflow-hidden">
      <img className=" h-52 " src="https://c8.alamy.com/comp/D7KPBC/female-chef-in-hotel-or-restaurant-kitchen-cooking-she-is-working-D7KPBC.jpg" alt="" />
     <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
     <Link to='/home' className=" text-white bg-blue-500 p-2 hover:bg-blue-600 rounded  hover:text-white ">Seen Our items</Link>
     </div>
     </div>
     <div className="bg-yellow-500 text-center text-xl"> 
        <p >Scound Chife</p>
      </div>
    </div>



     <div className=" group md:relative mt-3">
      <div className=" h-52  overflow-hidden">
      <img className=" h-52 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvvJbMwnweMXAA-J281Sw0R2KD8mKxkce4A&usqp=CAU" alt="" />
     <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
     <Link to='/home' className=" text-white bg-blue-500 p-2 hover:bg-blue-600 rounded  hover:text-white ">Seen Our items</Link>
     </div>
     </div>
     <div className="bg-yellow-500 text-center text-xl"> 
        <p > Chife Team-1</p>
      </div>
    </div>


     <div className=" group md:relative mt-3">
      <div className=" h-52 ">
      <img  className ="h-52"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7vPZWeW4cwv5UbyxBDIe-YgyFt3q1qnCbA&usqp=CAU" alt="" />

     <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
     <Link to='/home' className=" text-white bg-blue-500 p-2 hover:bg-blue-600 rounded  hover:text-white ">Seen Our items</Link>
     </div>
     </div>
     <div className="bg-yellow-500 text-center text-xl"> 
        <p > Chife Team-2</p>
      </div>
    </div>
      </div>
    

      
     </main>
  );
};

export default RootPart;
