

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import Home from './Components/Home/Home'
import Restaurant from './Components/Restaurant/Restaurant'
import Cart from './Components/Cart/Cart'







function App() {

    const router = createBrowserRouter([
     {
        path: '/',
        element:<Main></Main>,
        children:[
          {
            path: '/',
            loader: () => fetch('http://localhost:5000/food-restaurants'),
             element: <Home></Home>
          },
          {
            path: ':id',
            loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`),
            element: <Restaurant></Restaurant>
          },
          {
            path: 'cart',
            element: <Cart></Cart>
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
