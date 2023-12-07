import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import Home from './routes/Home';
import Error from './routes/Error';
import { ApiProvider } from "./api/apiContext";

const route = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'user/:id',
    element: <Dashboard />,
  },
  {
    path: '*',
    element: <Error />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider>
      <RouterProvider router={route} />
    </ApiProvider>
  </React.StrictMode>
);
