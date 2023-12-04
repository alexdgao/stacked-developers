import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage.jsx'
// import Blog from './Blog.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Thankyou from './Thankyou.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  // {
  //   path: "/blog",
  //   element: <Blog />,
  // },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/thankyou",
    element: <Thankyou />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)