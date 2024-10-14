import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronRight, FaFacebookMessenger } from 'react-icons/fa';
import "../CSS/FooterUp.css";
import Qb from "../Images/Quality Badge.png";
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

const FooterUp = () => {
  const navigate = useNavigate()
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



  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Display a loading state using SweetAlert
    const loadingAlert = Swal.fire({
      title: 'Processing...',
      text: 'Please wait while we process your subscription.',
      icon: 'info',
      buttons: false,
      closeOnClickOutside: false,
    });
    Swal.showLoading()

    try {
      const response = await fetch('https://www.heovin.com.ng/api/api4users/subscribe_newsletter.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (result.success) {
        // On success, show a success SweetAlert
        Swal.fire('Subscribed!', result.message, 'success');
        setEmail(''); // Clear the input field after submission
      } else {
        // Show an error SweetAlert if something goes wrong
        Swal.fire('Error', result.error, 'error');
      }
    } catch (error) {
      // Show a generic error SweetAlert if the API call fails
      Swal.fire('Error', 'There was a problem with the subscription. Please try again.', 'error');
    }finally{
      loadingAlert.close()
    }
  };


  return (
    <div>
      <div className='FooterUpWrap'>
        <div className='FooterUp'>
          <div className='FooterUpGroup'>
            <h3>CUSTOMER SERVICE</h3>
            <p onClick={()=>navigate("/contactus")}>Contact Us</p>
            <p>FAQ</p>
            <p onClick={()=>navigate("/userlogin")}>Sign In / Join</p>
          </div>
          <div className='FooterUpGroup'>
            <h3>ORDERS & POLICIES</h3>
            <p>Shipping Policy</p>
            <p>Return Policy</p>
            {/* <p>Order Form (PDF)</p> */}
          </div>
          <div className='FooterUpGroup'>
            <h3>COMPANY</h3>
            <p onClick={()=>navigate("/aboutus")}>About Us</p>
            {/* <p>Manufacturing</p> */}
            {/* <p>Blog</p> */}
            {/* <p>Non-GMO Pledge</p> */}
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
            <input placeholder='Enter email' type="email" onChange={(e)=>setEmail(e.target.value)}/>
            <div className='FooterUpFormIcon'>
              <FaChevronRight className='EmailChevron' onClick={handleSubmit}/>
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
            <input placeholder='Enter email'  type='email' onChange={(e)=>setEmail(e.target.value)}/>
            <div className='FooterUpFormIcon'>
              <FaChevronRight className='EmailChevron' onClick={handleSubmit}/>
            </div>
          </div>
        </div>
        <div className='FooterUpWrap2Group2' ref={dropdownRef}>
          <p onClick={() => handleDropdownClick('contact')}>
            CONTACT US <FaChevronDown />
          </p>
          {openDropdown === 'contact' && (
            <div className='FooterDropDown' style={{left:"10px"}}>
              <p onClick={()=>navigate('/contactus')}>Contact us</p>
              <p onClick={()=>navigate("/userlogin")}>Sign In / Join</p>
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
              <p onClick={()=>navigate("/aboutus")}>About Us</p>
              {/* <p>Manufacturing</p> */}
              {/* <p>Blog</p> */}
              {/* <p>Non-GMO Pledge</p> */}
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
