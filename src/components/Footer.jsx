import React, { useContext } from 'react';
import '../CSS/Footer.css';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { FaCcMastercard, FaCcVisa, FaFacebook, FaInstagram, FaNetworkWired, FaTwitter, FaWeebly, FaWeibo, FaWindowRestore } from 'react-icons/fa';
import { Context } from './Context';
import logo from '../Images3/logo.jpeg'

const Footer = () => {
  const location = useLocation()
const {subCategories} = useContext(Context)
const navigate = useNavigate();



  return (
    <footer className={location.pathname==="/userlogin"||location.pathname==="/usersignup"||location.pathname==="/forgotpassword"||location.pathname.includes("/resetpassword")||location.pathname.includes("/verify")?"footerdisappear":"footer"}>
      <div className="footer-container">
        
        <div className="footer-contact">
          <h2></h2>
     
          <img src={logo} alt='logo'/>

          <h4 style={{marginTop:"10px"}}>DEWISE MATTRESS</h4>
          <p style={{fontSize:"0.8rem"}}>
          EZEKEN & ASSOCIATES INVESTMENT<br/> NIG. LIMITED is one of the Top distributor<br/> of uni-foam since year 2010.Registered <br/>in 28 Apr 2014 and started commercially<br/> in Lagos state Nigerian
          We specialize in<br/> distributing mattress round lagos state<br/> and we assure attractive design,quality <br/>and variety.Our commitment to constantly<br/> upgrade ourselves with the latest technology<br/> and it enables us to standout in the market<br/> with a class and dignity.
          </p>
          <p>Email: contact@dewisemattress.com</p>
          <p>Phone: +234 806 154 9031 </p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to={"/"} className="footer-link">Home</Link>
          <Link to={"/aboutus"} className="footer-link">About us</Link>
          <Link to={"/contactus"} className="footer-link">Contact us</Link>
          <Link to={"/privacypolicy"} className="footer-link">Privacy Policy</Link>
          <Link to={'/termsandconditions'} className="footer-link">Terms and Conditions</Link>
          <Link to={"/referral"} className="footer-link">Referral</Link>
          <Link to={"/brands"} className="footer-link">Brands</Link>
          <Link to={"/specials"} className="footer-link">Specials</Link>
       
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
          <h4>Socials</h4>
          <a href="https://web.facebook.com/profile.php?id=61550544209616" target="_blank" className="social-link"><FaFacebook/></a>
        
          <a href="https://www.instagram.com/dewise.mattress/?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D" target="_blank" className="social-link"><FaInstagram/></a>
        </div>
      </div>
         <div
         style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        paddingTop:"50px"
         }}
         >
         <a style={{fontSize:"0.7rem",
          color:"rgba(255,255,255,0.6)",
          textDecoration:"underline",
          cursor:"pointer"
          }}
          onClick={()=>window.open("https://elexdontech.com", "_blank")}
          >
            <span style={{color:"rgba(0,255,0,0.7)"}}>POWERED BY </span> 
             ELEXDON DIGITAL TECHNOLOGIES LIMITED</a>
      </div>
    </footer>
  );
};

export default Footer;
