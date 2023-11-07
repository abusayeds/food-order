import { data } from "autoprefixer";
import { createContext, useEffect, useState } from "react";


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

  //  console.log(itemlength);

    const authinfo = {items , findFoods, findfoodlength ,itemlength }
  return (
    <div>
      <authContext.Provider value={authinfo}>
        {children}
      </authContext.Provider>
    </div>
  );
};

export default Context;
