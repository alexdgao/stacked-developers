import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage.jsx'
import Blog from './Blog.jsx'
import Blog1 from './Blog1.jsx'
import Blog2 from './Blog2.jsx'
import Blog3 from './Blog3.jsx'
import Blog4 from './Blog4.jsx'
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
    path: "/blog1",
    element: <Blog1 />,
  },

  {
    path: "/blog2",
    element: <Blog2 />,
  },

  {
    path: "/blog3",
    element: <Blog3 />,
  },

  {
    path: "/blog4",
    element: <Blog4 />,
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
