

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import Home from './Components/Home/Home'
import Restaurant from './Components/Restaurant/Restaurant'
import Cart from './Components/Cart/Cart'
import OrderFoods from './Components/OrderFoods/OrderFoods'
import About from './Components/About/About'
import Inventory from './Components/Inventory/Inventory'
import Servise from './Components/Servise/Servise'
import Login from './Components/Login/Login'
import Register from './Components/Login/Register'
import RootPart from './Components/Home/RootPart'
import PrivateRouter from './Components/PrivateRouter/PrivateRouter'







function App() {

    const router = createBrowserRouter([
     {
        path: '/',
        element:<Main></Main>,
        children:[
          {
            path: '/',
            loader: () => fetch('http://localhost:5000/food-restaurants'),
            element:  <RootPart></RootPart>
          },
          {
            path: 'home',
            loader: () => fetch('http://localhost:5000/food-restaurants'),
             element: <PrivateRouter> <Home></Home></PrivateRouter>
          },
          {
            path: 'home/:id',
            loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`),
            element: <PrivateRouter>  <Restaurant></Restaurant> </PrivateRouter> 
          },
          {
            path: 'cart',
            element: <Cart></Cart>  
          },
          {
            path: 'order',
            element: <PrivateRouter>  <OrderFoods></OrderFoods> </PrivateRouter>
          },
          {
            path: "about",
            element: <About></About>
          },
          {
            path: 'inventory',
            element: <Inventory></Inventory>
          },
          {
            path: 'servise',
            element: <Servise></Servise>
          },
          {
            path: 'login',
            element: <Login></Login>

          },
          {
            path: 'register',
            element: <Register></Register>
          }
         
        
        ]
     }
    ])
  return (
   <div className='app'>
      <RouterProvider
      router={router}
    > 
      </RouterProvider>
   </div>
  )
}

export default App
