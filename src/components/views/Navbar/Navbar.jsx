import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";
import useMfeStore from "LoginPageMFE/useMfeStore";
import React from "react";
import styles from './Navbar.module.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaShopify } from 'react-icons/fa';
/**
 * Impliments Navbar component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Navbar
 */
const pages = [
  <a href='/aboutus' style={{ color: 'white' }}>AboutUs</a>,
  <a href='/login' style={{ color: 'white' }}>Login</a>,
  <a href='/signIn' style={{ color: 'white' }}>Register</a>,
  <a href='/checkout' style={{ color: 'white' }}>Cart</a>];

const pageData = {
  ABOUT_US: { href: '/aboutus', name: 'AboutUs' },
  LOGIN: { href: '/login', name: 'Login' },
  REGISTER: { href: '/signIn', name: 'Register' },
  CART: { href: '/checkout', name: 'Cart' },
}

export const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const logout = useMfeStore(state => state.logoutUser)
  const user = useMfeStore(state => state.user)
   const cart = useMfeStore(state => state.cart)
    console.log(cart.cartItems.length)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <FaShopify style={{ fontSize: '40px', marginLeft: '15px' }}   component="a"
              href="/"/>
            
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              Nest
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="white"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <a href={pageData.ABOUT_US.href}>{pageData.ABOUT_US.name}</a>
                  </Typography>
                </MenuItem>

                {!user?.name && <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <a href={pageData.LOGIN.href}>{pageData.LOGIN.name}</a>
                  </Typography>
                </MenuItem>}
                {!user?.name && <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <a href={pageData.REGISTER.href}>{pageData.REGISTER.name}</a>
                  </Typography>
                </MenuItem>}
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <a href={pageData.CART.href}>{pageData.CART.name}</a>
                  </Typography>
                </MenuItem>

              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              Nest
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <a style={{ color: 'white' }} href={pageData.ABOUT_US.href}>{pageData.ABOUT_US.name}</a>
              </Button>
              {!user && <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <a style={{ color: 'white' }} href={pageData.LOGIN.href}>{pageData.LOGIN.name}</a>
              </Button>}
              {!user && <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <a style={{ color: 'white' }} href={pageData.REGISTER.href}>{pageData.REGISTER.name}</a>
              </Button>}
              {user && <Button
                onClick={() => {
                  handleCloseNavMenu();
                  logout();
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <a style={{ color: 'white' }} href='#'>Logout</a>
              </Button>}
              <Button
               
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <a style={{ color: 'white' }} href={pageData.CART.href}>
                <AiOutlineShoppingCart  className={styles.cartIcon} />
                 <span>{cart.cartItems.length}</span>
                </a>
                
              </Button>
            </Box>
             


            <span><h6>welcome</h6><h5>{user?.name || 'Guest'}</h5></span>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

/**
 * Property type definations
 *  {pageData.CART.name}
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
  example: PropTypes.string,
};

/**
 * Default values for Navbar
 *
 * @type {object}
 * @property {string} example='Navbar
 */

export const defaultProps = {
  example: "Navbar",
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
