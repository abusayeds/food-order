
import img from '../../Image/food.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './Header.css'
import { Link } from 'react-router-dom';
import { faAngleDown, faBars,faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const Header = () => {
  const [open , setOpen ] =useState(false)

   return (
    <main className='  header text-black '>
    <div className=' bg-red-600 md:w-5/6 mx-auto flex justify-between p-2 md:rounded  '>

    <div className=' w-12 flex items-center'>
      <img className='rounded' src={img} alt=""  />
        <p><Link to='/' className=' text-white ml-8 text-xl '>Home</Link></p>
    </div>

    <div className=' ml-4'>
     <p> <Link className='text-white  '>Log in</Link></p>
    </div>

    </div>
     
     <nav className='bg-slate-200 md:w-5/6 md:m-auto  '>
         <div className='md:flex md:items-center md:justify-center '>
            
            <div className='flex justify-between p-4 ' >
           
              
              <input className=' p-2 rounded ' type="text" placeholder='search foods ' />
         
              <p onClick={() => setOpen(!open)} className='text-2xl md:hidden'>
               
               
                {
                  open ?  <FontAwesomeIcon icon={faX}></FontAwesomeIcon> 
                  : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                }
                
                </p>
              
            </div>

           <div className='md:flex hidden ml-10 items-center'>
            
                  <div className='group'>
                    <p><Link to="" className='py-7 px-4 text-black  '> category <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></Link></p>
                    <div className='absolute top-30 bg-slate-300 p-5 rounded hidden group-hover:block hover:block'>
                    <p><Link className='text-black'> vasutal</Link></p>
                    <p><Link  className='text-black'> porota</Link></p>
                    <p><Link  className='text-black'> moklai</Link></p>
                    <p><Link  className='text-black'> vat</Link></p>
                    </div>
                  </div>
                  <div>
                  <Link  to="" className='py-7 px-4 text-black'> About </Link>
                  <Link to="" className='py-7 px-4 text-black'> Inventory</Link>
                  <Link to="" className='py-7 px-4 text-black '>Servise</Link>
                  </div>
            

            
           </div>

           {/*------- mobail devise -----*/}

           <div className={`md:hidden bg-slate-200 w-full h-full relative bottom-0  duration-500  ${open ? "left-0" : "hidden"} } `}>
                  <div className='px-6 py-4 flex gap-3'>
                              
                
                  <div className='group'>
                  <div className=' '>
                  <Link to="" className=' text-black'>
                  
                   Category</Link>
                  </div>
                  <div className='absolute top-10 left-4 p-5 rounded  bg-slate-200 hidden group-hover:block hover:block '>
                  <Link  to="" className=' text-black'> Category</Link>
                  <br />
                  <Link  to="" className=' text-black'> Category</Link>
                  <br />
                  <Link  to="" className=' text-black'> Category</Link>
                  </div>
                  
                  </div>

                  <Link  to="" className=' text-black'> About </Link>
                  <Link to="" className=' text-black'> Inventory</Link>
                  <Link to="" className=' text-black '>Servise</Link>
                    </div>
               
                

           </div>
          {/*------- mobail devise -----*/}
            
         </div>

     </nav>

    </main>
  );
};

export default Header;