import React, { useContext } from 'react';
import '../CSS/Footer.css';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { FaCcMastercard, FaCcVisa, FaFacebook, FaInstagram, FaNetworkWired, FaTwitter, FaWeebly, FaWeibo, FaWindowRestore } from 'react-icons/fa';
import { Context } from './Context';

const Footer = () => {
  const location = useLocation()
const {subCategories} = useContext(Context)
const navigate = useNavigate();



  return (
    <footer className={location.pathname==="/userlogin"||location.pathname==="/usersignup"||location.pathname==="/forgotpassword"||location.pathname.includes("/resetpassword")||location.pathname.includes("/verify")?"footerdisappear":"footer"}>
      <div className="footer-container">
        
        <div className="footer-contact">
          <h2></h2>
     
          <FaWeibo/>

          <h4>GL MARKETPLACE</h4>
          <p>Email: support@glmarketplace.ng</p>
          <p>Phone: +234 81234567 </p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to={"/"} className="footer-link">Home</Link>
          <Link to={"/aboutus"} className="footer-link">About us</Link>
          <Link to={"/contactus"} className="footer-link">Contact us</Link>
       
        </div>

        <div className="footer-links">
          <h4>Footer Links</h4>
          {subCategories.map((subCategory)=>(
        <p className="Menu" onClick={() => navigate(`/productlistpage/${subCategory.name}`)}>{subCategory.name}</p>
      
      ))} 
   
       
        </div>
        <div className="footer-payment">
          <h4>Payment Methods:</h4>
          <ul>
            <p> <FaCcVisa/> Visa</p>
            <p><FaCcMastercard/> Mastercard</p>
            {/* <li>PayPal</li> */}
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" className="social-link"><FaFacebook/></a>
          <a href="https://twitter.com" className="social-link"><FaTwitter/></a>
          <a href="https://instagram.com" className="social-link"><FaInstagram/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
