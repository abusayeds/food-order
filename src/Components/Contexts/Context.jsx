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

   const hendeldelete = (id) => {
     const remaingitem = itemlength.filter(item => item.category_id !== id)
     setitemlength(remaingitem)
    return hendeldelete
   }

  //  console.log(itemlength);

    const authinfo = {items , findFoods, findfoodlength ,itemlength ,hendeldelete }
  return (
    <div>
      <authContext.Provider value={authinfo}>
        {children}
      </authContext.Provider>
    </div>
  );
};

export default Context;
