import { createContext, useState } from "react";


  export const authContext = createContext()
  const Context = ({children}) => {
     const [items, setItems ] = useState([])
     const findFoods = (restaurant) => {
      const foods = [...items ,restaurant]
      setItems(foods)
      return findFoods
     }

    const authinfo = {items , findFoods}
  return (
    <div>
      <authContext.Provider value={authinfo}>
        {children}
      </authContext.Provider>
    </div>
  );
};

export default Context;
