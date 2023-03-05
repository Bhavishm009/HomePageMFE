import React from "react";
import PropTypes from "prop-types";
import classes from "./Offercard.module.css";
import useMfeStore from 'LoginPageMFE/useMfeStore'
import products from 'LoginPageMFE/products'
/**
 * Impliments offercard component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Offercard
 */
 console.log(useMfeStore,products)
export const Offercard = (props) => {
  return (
    <>
    {products?.map((x,i)=>{
        return (
            <>
            <div className={classes.container}>
            <div className="card bg-light text-primary  object-fit-contain-sm-contain border rounded ml-4 mb-3" key={i}>
              <img className="card-img" src={x.img} alt="Card image" />
              <div className="card-img-overlay">
                <h5 className="card-title">{x.productName}</h5>
                <p className="card-text">
                 Shop Now
                </p>
                <p className="card-text">Ending Soon</p>
              </div>
            </div>
          </div>
            </>
        )
    })}
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
 * Default values for Offercard
 *
 * @type {object}
 * @property {string} example='Offercard
 */

export const defaultProps = {
  example: "Offercard",
};

Offercard.propTypes = propTypes;
Offercard.defaultProps = defaultProps;

export default Offercard;
