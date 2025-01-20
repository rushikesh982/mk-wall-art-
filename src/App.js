import React from "react";
import Navbar from './web/Navbar.jsx'
import Home from "./web/Home.jsx";
import Diy from "./web/Diy.jsx";
import Newarrival from './web/Newarrival.jsx'
import About from "./web/About.jsx";
import Traditionalrangoliart from './web/Traditionalrangoliart.jsx'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App()
{
  return(
    <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/" element={<Diy></Diy>}></Route>
        <Route path="/Newarrival" element={<Newarrival></Newarrival>}></Route>
        <Route path="/Traditionalrangoliart" element={<Traditionalrangoliart></Traditionalrangoliart>}></Route>
        <Route path="/About" element={<About></About>}></Route>
      </Routes>
    </Router>
    
    </>
  )
}