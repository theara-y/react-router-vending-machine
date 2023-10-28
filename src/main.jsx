import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { 
  RouterProvider, 
  createBrowserRouter 
} from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import VendingMachine from './routes/vending-machine.jsx'
import Soda from './routes/soda';
import Chips from './routes/chips';
import FreshSardines from './routes/fresh-sardines';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/vending-machine',
        element: <VendingMachine />
      },
      {
        path: '/soda',
        element: <Soda />
      },
      {
        path: '/chips',
        element: <Chips />
      },
      {
        path: '/fresh-sardines',
        element: <FreshSardines />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
