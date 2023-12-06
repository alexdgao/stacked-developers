import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage.jsx'
import Blog from './Blog.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Thankyou from './Thankyou.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
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

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('myDatabaseFile.db');

db.serialize(() => {
  db.run(`CREATE TABLE Users (
    Id INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT,
    Email VARCHAR(100)
  )`);

  db.run(`INSERT INTO Users (Id, Name, Age, Email) VALUES (1, 'Charlie', 55, 'charlie@yahoo.com')`);

  db.each("SELECT * FROM Users", (err, row) => {
      console.log(row);
  });
});

db.close();