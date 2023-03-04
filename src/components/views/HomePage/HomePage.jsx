import PropTypes from "prop-types";
import React from "react";
import Category from "../../../Category";
import classes from "./HomePage.module.css";
import useMfeStore from "LoginPageMFE/useMfeStore";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Banner4 from "../Banner4/Banner4";
import Offercard from "../Offercard/Offercard";

export const HomePage = (props) => {
  const login = useMfeStore((state) => state.loginUser);
  login({
    name: "Kuldeep Dhaka",
  });
  return (
    <div className={classes.container}>
      <Navbar />
      <Hero />
      <div className="main">
        <Banner4 />
      </div>
      <div className="offer">
        <Offercard />
      </div>
      <Category />
      <Footer />
    </div>
  );
};

/**
 * Property type definations
 *
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
  example: PropTypes.string,
};

/**
 * Default values for HomePage
 *
 * @type {object}
 * @property {string} example='HomePage
 */

export const defaultProps = {
  example: "HomePage",
};

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;

export default HomePage;
