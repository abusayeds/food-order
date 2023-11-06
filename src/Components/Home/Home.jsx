
// import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const foods = useLoaderData() 


 
    return (
       <main className=' md:w-5/6  m-auto text-black rounded bg-white mt-10'>
        <p className='text-center font-bold text-2xl '>Our resturant hear  !</p>
         <div className=' mt-10 p-5'>
       <div  className='md:grid grid-cols-3 gap-5  '>
        {
        foods.map(food => <div 
        key={food.id}
        className='bg-slate-100 rounded mt-5'
        >

            <img className='w-full md:h-52 rounded' src={food.img} alt=""  />
            <div className='flex justify-between px-5 py-2'>
            <p>{food.name}</p>
            <Link className='text-black' to={`${food.id}`}>Show_details</Link>
            </div>

        </div>  )
       }
      
        
       </div>

    </div>
       </main>
    );
};

export default Home;