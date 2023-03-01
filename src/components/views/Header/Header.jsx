import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MyInput from "../MyInput/MyInput.jsx";
import classes from "./Header.module.css";
import { BsCart3 } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import Text from "../Text/Text.jsx";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { FaShopify } from 'react-icons/fa'
import useMfeStore from 'LoginPageMFE/useMfeStore'
/**
 * Impliments Header component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Header
 */
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const Header = (props) => {
  const cart = useMfeStore(state => state.cart)
  return (
    <div className={classes.container}>
      <FaShopify style={{ fontSize: "30px", color: '#3BB77E', marginRight: '18rem' }}></FaShopify>
      <div className={classes.searchBar_div}>
        <MyInput placeholder="Search for item" className={classes.input} />
        <div className={classes.icons}>
          <VscAccount style={{ fontSize: "30px", color: '#3BB77E' }} />
          <Text variant="text-sm">Account</Text>
          <BsHeart style={{ fontSize: "30px", color: '#3BB77E' }} />
          <Text variant="text-sm">Like</Text>
          <BsCart3 style={{ fontSize: "30px", color: '#3BB77E' }} /><StyledBadge badgeContent={cart?.cartItems?.length || 0} color="secondary"></StyledBadge>
          <Text variant="text-sm">Cart</Text>
        </div>
      </div>
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
 * Default values for Header
 *
 * @type {object}
 * @property {string} example='Header
 */

export const defaultProps = {
  example: "Header",
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
