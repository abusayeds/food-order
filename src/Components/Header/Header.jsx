
import img from '../../Image/food-hand-written-word-text-for-typography-design-in-black-color-with-leaf-can-be-used-for-a-logo-or-icon-RK2A4K.jpg'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
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
    </main>
  );
};

export default Header;