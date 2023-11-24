
// import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Home.css'


const Home = () => {
    const foods = useLoaderData() 
  

 
    return (
      <section className='md:w-5/6  m-auto'>
        

        
         <main className='  text-black rounded bg-white mt-10'>
        <p className='text-center font-bold text-2xl '>Our top 6 Resturant hear  !</p>
         <div className=' mt-10 p-5'>
       <div  className='md:grid grid-cols-3 gap-5  '>
        {
        foods.map(food => <div 
        key={food.id}
        className='bg-slate-100 rounded mt-5'
        >
               <Link className='text-black'  to={`${food.id}`}>      
            <img className='w-full md:h-52 rounded' src={food.img} alt=""  />
            <div className='flex justify-between px-5 py-2'>
            <p>{food.name}</p>
            <p>Show_details</p>
            </div>
            </Link>
        </div>  )
       }
      
        
       </div>

    </div>
       </main>
      </section>
    );
};

export default Home;