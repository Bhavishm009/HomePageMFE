import React from "react";
import './index.css'
import ReactDOM from "react-dom";
import HomePage from "./components/views/HomePage/HomePage";
import RegisterPage from "LoginPageMFE/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import LoginPage from 'LoginPageMFE/LoginPage'
import Aboutus from "./components/views/Aboutus/Aboutus";
const App = () => (
  <>
   
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/RegisterPage' element={<RegisterPage/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        </Routes>
      </BrowserRouter>
  
  </>
);
ReactDOM.render( <RecoilRoot><App /></RecoilRoot>, document.getElementById("app"));
