import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css';
import 'flowbite';
import {QueryClientProvider,QueryClient} from 'react-query'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./Route/routes";

let router=createBrowserRouter(routes)
const queryclient= new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryclient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
