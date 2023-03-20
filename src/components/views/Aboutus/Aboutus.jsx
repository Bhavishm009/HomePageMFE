import React from "react";
import PropTypes from "prop-types";

import classes from "./Aboutus.module.css";

/**
 * Impliments aboutus component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Aboutus
 */

export const Aboutus = (props) => {
  const handleClick = () => {
    window.alert('Our helpline Number is 1900-8888')
  }
  return (
    <>
      <div className={classes.about_section}>
        <h1>About Us Page</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quibusdam obcaecati magni pariatur facere provident labore. Tenetur dolore deleniti ea!</p>
        <p>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, cumque enim eligendi, excepturi fuga voluptatibus alias, a natus deserunt nulla neque illum voluptatum ipsum totam! Eos, repellat quidem! Odit, praesentium.
        </p>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.card}>
            <img
              src="https://cdn.pixabay.com/photo/2020/10/23/14/55/woman-5678999__340.jpg"
              alt="Jane"
              style={{ width: "100%",height:'27rem'}}
            />
            <div className={classes.container}>
              <h2>Emily Shaw</h2>
              <p className={classes.title}>CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <button className={classes.button}onClick={handleClick}>Contact</button>
            </div>
          </div>
        </div>

        <div className={classes.column}>
          <div className={classes.card}>
            <img
              src="https://cdn.pixabay.com/photo/2018/01/04/14/16/woman-3060784_960_720.jpg"
              alt="Mike"
              style={{ width: "100%",height:'27rem' }}
            />
            <div className={classes.container}>
              <h2>Lily Ross</h2>
              <p className={classes.title}>Head Engineer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <button className={classes.button} onClick={handleClick}>Contact</button>
            </div>
          </div>
        </div>

        <div className={classes.column}>
          <div className={classes.card}>
            <img
              src="https://cdn.pixabay.com/photo/2017/09/16/17/42/business-woman-2756210_960_720.jpg"
              alt="John"
              style={{ width: "100%" ,height:'27rem'}}
            />
            <div className={classes.container}>
              <h2>Jenny Doe</h2>
              <p className={classes.title}>Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <button className={classes.button}onClick={handleClick}>Contact</button>
            </div>
          </div>
        </div>
      </div>
      <span className={classes.mapHeading}><h1>You can find Us on Google map</h1></span>
      <div className={classes.mapImg}>
        
      </div>
    </>
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
 * Default values for Aboutus
 *
 * @type {object}
 * @property {string} example='Aboutus
 */

export const defaultProps = {
  example: "Aboutus",
};

Aboutus.propTypes = propTypes;
Aboutus.defaultProps = defaultProps;

export default Aboutus;
