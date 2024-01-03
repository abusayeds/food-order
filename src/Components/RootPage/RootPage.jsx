
import { Link } from 'react-router-dom';





function RootPage() {
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
       <button className='border-green-700 bg-green-500 hover:bg-green-600 '> <Link to='/home' className=" text-black hover:text-black"> <span className='hover:animate-bounce'>Seen Our items</span></Link></button>
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

       {/* about component */}
      
        
    </main>
  );
}

export default RootPage;
