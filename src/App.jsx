import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import HomePage from "./components/views/HomePage/HomePage";
import RegisterPage from "LoginPageMFE/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "LoginPageMFE/LoginPage";
import Aboutus from "./components/views/Aboutus/Aboutus";
import Navbar from "./components/views/Navbar/Navbar";
import Banner4 from './components/views/Banner4/Banner4'
import Offercard from "./components/views/Offercard/Offercard";
const App = () => (
  <>


<div className="main"><Banner4/></div>
    <div className="offer"><Offercard/></div>
    <BrowserRouter>
 
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signIn" element={<RegisterPage />} />
        <Route path="/aboutus" element={<Aboutus />} />

      </Routes>

    </BrowserRouter>
    {/* <RoutingComponant path='/' element='<HomePage/>'/> */}
    {/* <RoutingComponant routes={routes} path={'/'} element={<HomePage />} /> */}
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
