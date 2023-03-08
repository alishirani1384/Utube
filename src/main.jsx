import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import 'tippy.js/dist/tippy.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import { QueryClient, QueryClientProvider } from 'react-query';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element:<ErrorPage/>
      }
    ]
   }
])
 
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
  </QueryClientProvider>,
)
