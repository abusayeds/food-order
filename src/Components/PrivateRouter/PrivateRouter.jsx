import { useContext } from "react";
import { authContext } from "../Contexts/Context";
import { Navigate } from "react-router-dom";



  const PrivateRouter = ({children}) => {
    
   const {user} =useContext(authContext)
   if(!user){
    return <Navigate to='/login'></Navigate>
   }
   return children
};

export default PrivateRouter;
