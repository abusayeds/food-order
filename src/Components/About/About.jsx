import { Link } from 'react-router-dom';
import img1 from '../../Image/depositphotos_254046202-stock-photo-happy-male-indian-chef-in.jpg'


function About() {
  return (
    <main className='md:w-5/6 mx-auto'>
        <div className="  mt-5 rounded md:p-5 md:bg-base-200 ">    
    <div className=" md:flex gap-5 px-5  ">
        <div className='  bg-white flex p-5 items-center justify-center rounded'>
        <img className=' w-full' src= {img1} alt=""  />
        </div>
      <div className="text-black flex items-center justify-center">
      <div>
       <div className=''>
       <h1 className="md:text-4xl text-2xl  font-semibold">Chife Office News  !</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
       </div>
        
        <Link to='/home'><button className=" text-black bg-red-300 hover:bg-red-400">Get Started</button></Link>
      </div>
      </div> 
    </div> 

                                                
  </div>
  <div className='text-black p-5'>
    <div className='md:text-center'>
    <p className='text-3xl font-semibold'>Enjoy the best items // <span className='text-red-400'>discount available</span></p>
    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Odit repellendus iste, possimus iusto quidem nam amet <br /> quae aliquam a illo.</p>
    </div>
    <div className=''>
       <div className='my-5 md:flex gap-5 justify-around  w-full'>

        <img className='w-80 md:h-80 h-52 mt-4 rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpgfGfepDkXNsQySUQnDei9k3_Odj7QYU4bg&usqp=CAU" alt=""  />
       <img className='w-80 md:h-80 h-52 mt-4 rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2CQmJ0dCFCt7pi79VmcKg4QOXHXZDvDIdg&usqp=CAU" alt=""  />
       <img className='w-80 md:h-80 h-52 mt-4 rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdpUIOOGHCVLL4vJKgexWWbBPN9EcXbD0bPA&usqp=CAU" alt=""  />
       </div>
    </div>
  </div>
    </main>
  );
}

export default About;
