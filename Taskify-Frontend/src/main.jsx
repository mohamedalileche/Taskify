import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Home from './Pages/Home.jsx'

const client = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
     <RouterProvider router={router} />
     </QueryClientProvider>
  </React.StrictMode>,
)
