import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './About.jsx';
import SignUp from './SignUp.jsx';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/*" element={<App/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
