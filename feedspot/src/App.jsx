// App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import {Routes, Route, useLocation} from "react-router-dom";
import About from './About.jsx';
import SignUp from './SignUp.jsx';
import Home from './Home.jsx';
import { AnimatePresence } from 'framer-motion';
import Preloader from './Preloader.jsx';


const App = () => {
  return (
    <>
    <Navbar />
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
      <Route index element={<Home/>}></Route>
      <Route path="/about" element={<About/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/pre" element={<Preloader />} />
    </Routes>
    </AnimatePresence>
    </>
  );
}

export default App;
