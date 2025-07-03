import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './style.css'
import React from 'react';
import Landing from './pages/Landing.jsx';
import PenyuluhPertanianPage from './pages/PenyuluhPertanianPage.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/buku/penyuluh-pertanian',
    element: <PenyuluhPertanianPage />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
