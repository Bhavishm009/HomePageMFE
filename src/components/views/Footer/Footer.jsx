import React from "react";
import PropTypes from "prop-types";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTumbler } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import { GoLocation } from 'react-icons/go'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { FaShopify } from 'react-icons/fa'
import classes from "./Footer.module.css";

/**
 * Impliments footer component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Footer
 */

export const Footer = (props) => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_box}>
        <div className={classes.footer_box_social}>
          <FaShopify style={{ fontSize: "30px", color: '#3BB77E', marginRight: '18rem' }}>Nest</FaShopify>
          <div>
            <GoLocation className={classes.icons} /> Address : Xyz Street <br />
            <TfiHeadphoneAlt className={classes.icons} /> Call Us : (+91) - 1234 456 789<br />
            <RiSendPlaneFill className={classes.icons} /> Email : contact@nest.com
          </div>
          <div className={classes.footer_social}>
            <a href="#">
              <TiSocialFacebookCircular className={classes.icons} />
            </a>
            <a href="#">
              <TiSocialLinkedin className={classes.icons} />
            </a>
            <a href="#">
              <TiSocialTumbler className={classes.icons} />
            </a>
            <a href="#">
              <TiSocialYoutube className={classes.icons} />
            </a>
            <a href="#">
              <TiSocialInstagram className={classes.icons} />
            </a>
          </div>
        </div>
        <div className={classes.footer_box_discover_menu}>
          <h3>Company</h3>
          <ul className={classes.list}>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={classes.footer_box_help}>
          <h3>Account</h3>
          <ul className={classes.list}>
            <li>Sign In</li>
            <li>View Cart</li>
            <li>Help Ticket</li>
            <li>Shipping Deatails</li>
          </ul>
        </div>
        <div className={classes.footer_box_help}>
          <h3>Information</h3>
          <ul className={classes.list}>
            <li>Store Location</li>
            <li>Help & FAQ's</li>
            <li>Order & Returns</li>
            <li>Feedback For us.</li>
          </ul>
        </div>
        <div className={classes.subcribe}>
          <h3>Subcribe</h3>
          <div className={classes.subcribe_box}>
            <input type="email" placeholder="Enter Your Email *" />
            <RiSendPlaneFill className={classes.subcribe_box_send} />
          </div>
          <div className={classes.subcribe_box_info}>
            <p>  Subcribe For Hot Deals And Update.</p>
          </div>
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
 * Default values for Footer
 *
 * @type {object}
 * @property {string} example='Footer
 */

export const defaultProps = {
  example: "Footer",
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
