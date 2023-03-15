import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import 'tippy.js/dist/tippy.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import VideoPage from './pages/VideoPage';
import { searchAction } from './components/feature/SearchInp';
import SearchPage from './pages/SearchPage';
import SignPage, { loginAction } from './pages/SignPage';
import UploadPage from './pages/UploadPage';
import ScrolltoTop from './utils/ScrolltoTop';


const router = createBrowserRouter([
  {
    path: "/",
    element: <><Layout /><ScrolltoTop/></>,
    errorElement: <ErrorPage />,
    action: searchAction,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/search/:slug",
        element:<SearchPage/>
      }
      ,
      {
        path: "video/:id",
        element:<VideoPage/>
      }
      ,
      {
        path: "*",
        element:<ErrorPage/>
      },
      {
        path: "search/:slug",
        element:<SearchPage/>
      },
      {
        path: "login",
        element: <SignPage />,
        action:loginAction
      },
      {
        path: "upload",
        element:<UploadPage/>
      }
    ]
   }
])
 
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
)
