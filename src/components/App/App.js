// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import Layout from "../Layout/Layout";
import HomePage from "../HomePage/HomePage";
import AboutMe from "../AboutMe/AboutMe";
import MyProjects from '../MyProjects/MyProjects';
import ContactInfo from '../ContactInfo/ContactInfo';


function App() {

  const handleError = (err) => {
    console.warn(err);
  }



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="about_me" element={<AboutMe />} />
            <Route path="my_projects" element={<MyProjects />} />
            <Route path="contact_info" element={<ContactInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
