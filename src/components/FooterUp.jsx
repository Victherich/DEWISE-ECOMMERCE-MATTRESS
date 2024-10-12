import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronRight, FaFacebookMessenger } from 'react-icons/fa';
import "../CSS/FooterUp.css";
import Qb from "../Images/Quality Badge.png";

const FooterUp = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // Tracks which dropdown is open
  const dropdownRef = useRef(null); // Ref for detecting outside clicks

  // Function to handle click outside of dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(null); // Close the dropdown if click is outside
    }
  };

  useEffect(() => {
    // Add event listener when component is mounted
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up event listener when component is unmounted
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggles the dropdown visibility
  const handleDropdownClick = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div>
      <div className='FooterUpWrap'>
        <div className='FooterUp'>
          <div className='FooterUpGroup'>
            <h3>CUSTOMER SERVICE</h3>
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>Sign In / Join</p>
          </div>
          <div className='FooterUpGroup'>
            <h3>ORDERS & POLICIES</h3>
            <p>Shipping Policy</p>
            <p>Return Policy</p>
            <p>Order Form (PDF)</p>
          </div>
          <div className='FooterUpGroup'>
            <h3>COMPANY</h3>
            <p>About Us</p>
            <p>Manufacturing</p>
            <p>Blog</p>
            <p>Non-GMO Pledge</p>
          </div>
          <div className='QualityWrap'>
            <h2>SUPERIOR<br />QUALITY</h2>
            <p>GUARANTEED</p>
            <span>Learn More <FaChevronRight className='LeanMoreChevron' /></span>
          </div>
          <div className='FooterUpGroup'>
            <h3>CONTACT US</h3>
            <p>1-800-544-1925</p>
            <p>Sunday - Closed</p>
            <p>Mon - Fri 9am - 9pm (EST)</p>
            <p>Saturday - 10am-6pm (EST)</p>
            <div className="FooterLiveChat"><FaFacebookMessenger /><p>LIVE CHAT</p></div>
          </div>
        </div>
        <div className='FooterUpGroup'>
          <h3>EMAIL SIGN UP</h3>
          <p>Receive updates on new products and crazy deals!</p>
          <div className='FooterUpInputWrap'>
            <input placeholder='Enter email' />
            <div className='FooterUpFormIcon'>
              <FaChevronRight className='EmailChevron' />
            </div>
          </div>
        </div>
      </div>
      <div className='FooterUpWrap2'>
        <div className='FooterUpWrap2Group1'>
          <img src={Qb} alt="Quality Badge" />
        </div>
        <div className='FooterUpGroup' style={{width:"100%",paddingLeft:"20px",paddingRight:"20px", paddingTop: "20px", paddingBottom: "40px",backgroundColor:"#F9F9F9" }}>
          <h3>EMAIL SIGN UP</h3>
          <p>Receive updates on new products and crazy deals!</p>
          <div className='FooterUpInputWrap' style={{width:"280px"}}>
            <input placeholder='Enter email'  />
            <div className='FooterUpFormIcon'>
              <FaChevronRight className='EmailChevron' />
            </div>
          </div>
        </div>
        <div className='FooterUpWrap2Group2' ref={dropdownRef}>
          <p onClick={() => handleDropdownClick('contact')}>
            CONTACT US <FaChevronDown />
          </p>
          {openDropdown === 'contact' && (
            <div className='FooterDropDown' style={{left:"10px"}}>
              <p>Contact us</p>
              <p>Sign In / Join</p>
            </div>
          )}

          <p onClick={() => handleDropdownClick('information')}>
            INFORMATION <FaChevronDown />
          </p>
          {openDropdown === 'information' && (
            <div className='FooterDropDown'>
              <p>FAQ</p>
              <p>Shipping Policy</p>
              <p>Return Policy</p>
            </div>
          )}

          <p onClick={() => handleDropdownClick('company')}>
            COMPANY <FaChevronDown />
          </p>
          {openDropdown === 'company' && (
            <div className='FooterDropDown' style={{ right: "10px" }}>
              <p>About Us</p>
              <p>Manufacturing</p>
              <p>Blog</p>
              <p>Non-GMO Pledge</p>
            </div>
          )}
        </div>
        <div className='NeedHelpWrap'>
            <h2>
            NEED HELP?<br/>1-800-544-1925
            </h2>
        </div>
        
      </div>
      
    </div>
  );
};

export default FooterUp;
