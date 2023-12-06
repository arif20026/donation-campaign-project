import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Home from './Home/Home';
import Donations from './component/Donations/Donations';
import Statistics from './component/Statistics/Statistics';
import ErrorPage from './component/ErrorPage/ErrorPage';
import CardDetails from './component/CardDetails/CardDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/donation",
        element: <Donations></Donations>,
        loader : () => fetch('/donations.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: '/details/:id',
        element: <CardDetails></CardDetails>,
        loader: () => fetch('/donations.json')

      },

      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
