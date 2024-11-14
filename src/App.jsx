import {   createBrowserRouter,RouterProvider, } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Trending from './pages/Trending'
import Posts from './pages/Posts'
import Profiles from './pages/Profiles'


function App() {
const router = createBrowserRouter([
  {
    path : "/",
    element : <Login/> 
  },
  {
    path : "/register",
    element : <Register/>
  },
  {
    path : "/home",
    element : <Home/>
  },
  {
    path : '/Tesla',
    element : <Trending/>
  },
  {
    path : "/business",
    element : <Posts/>
  },
  {
    path :"/TechCrunch",
    element : <Profiles/>
  }
])
  return (
    <>
      <RouterProvider router={router} />
     </>
  )
}

export default App
