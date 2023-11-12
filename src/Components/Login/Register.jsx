
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Contexts/Context';

function Register() {
      const [error, seterror] = useState()
     const {createUser} = useContext(authContext)
    const hendelsubmit = (event) => {
    event.preventDefault()
    const form =event.target
    const email =form.email.value
    const password =form.password.value
    const confirm =form.confirm.value

    if(password.length < 6){
      seterror('password should be 6 characters long ')
    }
    if(password !== confirm){
      seterror('password did nit match')
      return
    }
    createUser(email,password)
    .then(result => {
      const user = result.user;
     console.log(user);
      form.reset();
   
  })
  .catch(error => console.error('error' , error))
  
  }
        



  return (
    <div className="flex justify-center bg-slate-200 md:w-3/6 h-4/4 mx-auto mt-4 md:p-5 p-2 text-black rounded ">
    <form onSubmit={hendelsubmit} className=" md:w-4/6 m-auto" >
       <p className="text-4xl text-center font-bold text-blue-600">Welcome </p>
       <p className="text-center font-bold">to our food servise. please register</p>
      <div className="mt-5" >
        <p className="mt-1">Email:</p>
        <input className="w-full p-2 rounded" type="email" name="email" placeholder=" Your Email " required />
      </div>
      <div className="mt-4">
        <p className="mt-1">Password:</p>
        <input className="w-full p-2 rounded" type="password" name="password" placeholder="Your password" required />
      </div>
      <div className="mt-4">
        <p className="mt-1">re-type Password:</p>
        <input className="w-full p-2 rounded" type="confirm-password" name="confirm"  placeholder="re-type password" required />
      </div>
      
      <div className="my-5 text-white">
      <input className=" p-2 rounded w-full hover:bg-blue-600 bg-blue-500" type="submit"   value="Register"  />
     <p className="text-black">Alredy have an acount  <Link to='/login'>  <small className="text-blue-600 font-bold">please login</small> </Link> </p>
      </div>
       <p className='text-red-600 mb-10'>{error}</p>
  
    </form>
            
 </div>
  );
}

export default Register;
