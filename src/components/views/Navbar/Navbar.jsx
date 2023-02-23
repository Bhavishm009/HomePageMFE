import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import Text from '../Text/Text'


/**
 * Impliments Navbar component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Navbar
 */

export const Navbar = (props) => {
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src='' alt="app__logo" />
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><Text variant='text-sm'>Hot Deals</Text></li>
                <li className="p__opensans"><Text variant='text-sm'>Home</Text></li>
                <li className="p__opensans"><Text variant='text-sm'>Food</Text></li>
                <li className="p__opensans"> <Text variant='text-sm'>Vegetable</Text></li>
                <li className="p__opensans"><Text variant='text-sm'>Drink</Text></li>
                <li className="p__opensans"><Text variant='text-sm'>Cookies</Text></li>
                <li className="p__opensans"><Text variant='text-sm'>Meat & Seafood</Text></li>
                <li className="p__opensans"><Text variant='text-sm'>Bakery</Text></li>
            </ul>
            <div className="app__navbar-login">
                <Text variant='text-sm'>Log In / Registration</Text>
                <div />
                
                
            </div>
            <Text variant='text-sm'>1800 213 321</Text>
        </nav>
    )
}

/**
 * Property type definations
 * 
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
    example: PropTypes.string
};

/**
 * Default values for Navbar
 * 
 * @type {object}
 * @property {string} example='Navbar 
 */

export const defaultProps = {
    example: 'Navbar'
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;