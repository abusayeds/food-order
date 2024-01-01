import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../../Image/food.jpg'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <main className=" text-white bg-slate-900 rounded md:w-5/6 mx-auto mb-20 md:my-5">
      <div className='md:w-4/6 md:mx-auto md:grid grid-cols-2 p-4'>
      <div className='mt-3'>
        
        <div>
          <div>
          <img className='w-36 h-12 rounded' src={img} alt="" />
          </div>
          <div className='flex mt-3  gap-5'>
             <div className=''>
             <p className='font-semibold text-yellow-400'>Chife_Details:</p>
             </div>
            <div>
            <p>Hade chife <small>Anna torri</small> </p>
            <p>Email: chife@gmail.com</p>
            </div>
          </div>
          <div className='flex gap-3 mt-3'>
            <p className='font-semibold text-yellow-400'>Category: </p>
            <p className='ml-8'>lauce lauce lauce lauce</p>
         </div>
        </div>

      </div>




      <div className=''>
        <p className='font-semibold mt-3 '>Sent Us A Messages  </p>
          
          <div className=' md:p-3'>
            <div className='flex gap-3 w-full'> 
             
              <input r className=' rounded p-1 w-full' type="text" placeholder='First && Last Name' />
            </div>
            <div className='mt-3 w-full  '>
              <input className='rounded  p-1 w-full' type="text" placeholder='Email adderss ' />
            </div>
            <div className='w-full h-full mt-3'>
              <input className=' rounded w-full h-20 p-1' type="text" placeholder='Details' />
            </div>
          <p className='text-end mt-3'><button className='bg-yellow-400 '>Sent Messges</button></p>
          </div>
        
      </div>
      
      </div>
      <p className='text-center'>Create by <FontAwesomeIcon className='text-yellow-400' icon={faHeart}></FontAwesomeIcon> AS SABBIR (copyright @2023))</p>
    </main>
  );
}

export default Footer;
