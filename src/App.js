import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import Project from './components/Project';
import Navbar from './components/Navbar';
import SinglePost from './components/SinglePost';

function App() {
  return (
   <Router>
   {/* <Navbar/> */}
   <Routes>
    <Route  path={"/"} element={<Home/>} />
    <Route element={<About/>} path="/about" />
    <Route element={Post} path="/post" />
    <Route element={Project} path="/project" />
    {/* <Route Component={Navbar} path="/" exact/> */}
    <Route element={SinglePost} path="/post/:slug" />
   </Routes>
   </Router>
  // <Home/>
  );
}

export default App;
