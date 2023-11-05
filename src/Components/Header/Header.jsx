
import img from '../../Image/food.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './Header.css'
import { Link } from 'react-router-dom';
import { faAngleDown, faBars,faBorderNone,faHome,faSearch,faShoppingCart,faUser,faX } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { authContext } from '../Contexts/Context';
const Header = () => {


    const {items} = useContext(authContext)
  //  console.log(items.length);

  const [open , setOpen ] =useState(false)

   return (
    <section className=' header'>
      <main className=' text-black md:w-5/6  md:mx-auto  '>
    <div className=' bg-red-600   md:flex hidden justify-between p-2 md:rounded  '>

    <div className=' w-12 flex items-center'>
      <img className='rounded' src={img} alt=""  />
        <p><Link to='/' className=' text-white ml-8 text-xl '>Home</Link></p>
    </div>

    <div className=' ml-4'>
     <p> <Link className='text-white  '>Log in</Link></p>
    </div>

    </div>




   

   




    
     
     <nav className='bg-slate-200  '>
         <div className=' md:flex items-center justify-around p-4'>
            
            <div className='  flex justify-between p-2 ' >
           
              
              <div className=' relative flex items-center'>
              <input className=' px-2  py-2 rounded ' type="text" placeholder='search foods  '/>
               <FontAwesomeIcon className='absolute right-3' icon={faSearch}></FontAwesomeIcon>
              </div>
               
               <div>
               <p onClick={() => setOpen(!open)} className='text-2xl md:hidden'>
               
               
               {
                 open ?  <FontAwesomeIcon icon={faX}></FontAwesomeIcon> 
                 : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
               }
               
               </p>
             
               </div>
            </div>

           <div className='md:flex hidden ml-10  '>
            
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
           <div className='md:flex hidden relative'>
             <p className='absolute bottom-6 bg-white text-center  px-1 rounded-full left-5'>{items.length}</p>
             <FontAwesomeIcon className='text-red-500 text-3xl ' icon={faShoppingCart}></FontAwesomeIcon>
             
            </div>

           {/*------- mobail devise -----*/}

           <div className={`md:hidden bg-slate-200 w-full h-full relative bottom-0  duration-500  ${open ? "left-0" : "hidden"} } `}>
                  <div className='px-2 py-4 flex gap-3'>
                              
                
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

    <main className= 'nav-sm  bg-red-600   flex md:hidden justify-between px-10 py-3 md:rounded '>
       <div>
       <Link to='/' className='text-white text-2xl'><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></Link> 
       </div>
       <div>
       <Link className='text-white text-2xl'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Link>
       </div>
       <div>
       <Link className='text-white text-2xl'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></Link>
       </div>
    </main>
    </section>
  );
};

export default Header;