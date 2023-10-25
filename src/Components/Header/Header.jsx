import React from 'react';
import img from '../../Image/food-hand-written-word-text-for-typography-design-in-black-color-with-leaf-can-be-used-for-a-logo-or-icon-RK2A4K.jpg'
import './Header.css'
const Header = () => {
  return (
    <main className='md:pt-4 header'>
    <div className=' bg-white text-black md:w-5/6 mx-auto flex justify-between p-2 md:rounded  '>

    <div className=' w-12 flex items-center'>
      <img className='rounded' src={img} alt=""  />
        <h2 className=' ml-8 text-xl '>Home</h2>
    </div>

    <div className=''>
      <button className='border-none'> Login</button>
    </div>

    </div>
    </main>
  );
};

export default Header;