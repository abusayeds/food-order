import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Contexts/Context";
 


function Login() {
  const { hendlegooglesingin} = useContext(authContext)
  const {signin} =useContext(authContext)
  const provider = new GoogleAuthProvider()
  const navigate = useNavigate()
  const googleSingin = () => {
    hendlegooglesingin(provider,navigate)
    
  }
  const hendelsingin = (event) => {
    event.preventDefault()
    const form =event.target
    const email =form.email.value
    const password =form.password.value
    console.log(email,password);
    signin(email,password)
    .then(result => {
      const user = result.user;
      navigate('/home')
      form.reset();

  })
  .catch(error => console.error('error' , error))
   }
  return (
    

   <div className="flex justify-center bg-slate-200 rounded md:w-3/6 h-4/4 mx-auto mt-4 md:p-5 p-2 text-black ">
      <form onSubmit={hendelsingin} className=" md:w-4/6 m-auto" >
         <p className="text-4xl text-center font-bold text-blue-600">Welcome </p>
         <p className="text-center font-bold">to our food servise. please login</p>
        <div className="mt-5" >
          <p className="mt-1">Email:</p>
          <input className="w-full p-2 rounded" type="email" name="email" id="" placeholder=" Your Email " required />
        </div>
        <div className="mt-4">
          <p className="mt-1">Password:</p>
          <input className="w-full p-2 rounded" type="password" name="password" id="" placeholder="Your password" required />
        </div>
        
        <div className="my-5 text-white">
        <input className=" p-2 rounded w-full hover:bg-blue-600 bg-blue-500" type="submit"   value="Login"  />
        <p className="text-black">Don't have an acount <Link to='/register'> <small className="text-blue-600 font-bold">please register</small> </Link> </p>
        </div>
        <div onClick={() => googleSingin() } className="bg-white flex items-center justify-center my-10">
          <p className="text-xl text-blue-600 font-bold">G</p>
          <p className=" p-2">Login with Google</p>
        </div>

      </form>
              
   </div>
  );
}

export default Login;
