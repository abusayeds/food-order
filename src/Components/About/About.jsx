import { Link } from 'react-router-dom';
import img1 from '../../Image/depositphotos_254046202-stock-photo-happy-male-indian-chef-in.jpg'


function About() {
  return (
    <div className=" md:w-5/6 mx-auto mt-5 rounded p-5 bg-base-200">
    <div className=" md:flex gap-5 px-5 ">
        <div className='  bg-white flex p-5 items-center justify-center rounded'>
        <img className=' w-full' src= {img1} alt=""  />
        </div>
      <div className="text-black flex items-center justify-center">
      <div>
       <div className=''>
       <h1 className="md:text-5xl text-2xl md:text-red-400 font-bold">Chife Office News !</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
       </div>
        
        <Link to='/home'><button className=" text-black bg-red-300 hover:bg-red-400">Get Started</button></Link>
      </div>
      </div>
    </div>
  </div>
  );
}

export default About;
