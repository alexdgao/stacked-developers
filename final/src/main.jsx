import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage.jsx'
import Blog from './Blog.jsx'
import About from './About.jsx'
import Thankyou from './Thankyou.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import LoggedIn from './LoggedIn.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/thankyou",
    element: <Thankyou />,
  },
  {
    path: "/loggedin",
    element: <LoggedIn />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
