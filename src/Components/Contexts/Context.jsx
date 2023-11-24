
import { createContext,  useEffect,  useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import app from "../../firebase/firebase.Config";




  export const authContext = createContext()


  const Context = ({children}) => {
     
    

     const [items, setItems ] = useState([])
     const findFoods = (restaurant) => {
      const foods = [...items ,restaurant]
      setItems(foods)
      return findFoods
     }
     
   const[itemlength , setitemlength] = useState([])
   const findfoodlength = (item) => {
       const foodslength = [...itemlength , item]
       setitemlength(foodslength)
    return findfoodlength
   }

   const hendeldelete = (id) => {
     const remaingitem = itemlength.filter(item => item.category_id !== id)
     setitemlength(remaingitem)
    return hendeldelete
   }
    // singin methods ******

     const auth = getAuth(app)
     const [user , setuser] = useState(null)
    
       

     const logOut = () =>{
       signOut(auth)
      .then(() => {
        setuser(null)
      })
      .catch(() =>{
        setuser(null)
      })

     }
     const hendlegooglesingin = (provider,navigate) => {
      signInWithPopup (auth , provider)
      .then(result => {
        const user = result.user;
      navigate("/home")
      
  
    })
    .catch(error => console.error('error' , error))
       return hendlegooglesingin
     }
   const createUser = (email,password) => {
    return  createUserWithEmailAndPassword(auth ,email, password)

   }

   const signin = (email,password) => {
    return signInWithEmailAndPassword(auth ,email, password)
     
   }


   useEffect ( () => {
    const unSubscribe =  onAuthStateChanged (auth ,  (currentUser) => {
      setuser(currentUser)
      return () =>  unSubscribe
    })
   } ,[])
   // singin methods ******
       


    const authinfo = {
      items , findFoods, findfoodlength ,itemlength ,hendeldelete, 
      // sing methods user
      user,  hendlegooglesingin,logOut,createUser,signin,
   

    }
  return (
    <div>
      <authContext.Provider value={authinfo}>
        {children}
      </authContext.Provider>
    </div>
  );
};

export default Context;
