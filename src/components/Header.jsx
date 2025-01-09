// // import React, { useEffect, useState, useContext, useRef } from 'react';
// // import { FaCartPlus, FaHamburger, FaSearch, FaChevronRight, FaUserCircle } from "react-icons/fa";
// // import "../CSS/Header.css";
// // import flag from "../Images/flag.png";
// // import logo from "../Images/logo.jpeg";
// // import { useNavigate } from 'react-router-dom';
// // import { useSelector } from 'react-redux';
// // import SideCategoryMenu2 from './SideCategoryMenu2';
// // import { Context } from './Context';
// // import Swal from 'sweetalert2';
// // import axios from 'axios';

// // const Header = () => {
// //     const userInfo = useSelector(state => state.userInfo)
// //     const navigate = useNavigate();
// //     const cart = useSelector(state => state.cartItems);
// //     const [totalQty, setTotalQty] = useState(0);
// //     const totalAmount = useSelector(state => state.totalAmount);
// //     const { mobileMenuSwitch, setMobileMenuSwitch,searchArray,setSearchArray } = useContext(Context);
// //     const sideMenuRef = useRef(null); // Reference for the side menu

// //     // Calculate the total quantity of items in the cart
// //     useEffect(() => {
// //         const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
// //         setTotalQty(totalItems);
// //     }, [cart]);

// //     // Add event listener to detect clicks outside of SideCategoryMenu2
// //     useEffect(() => {
// //         const handleClickOutside = (event) => {
// //             if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
// //                 setMobileMenuSwitch(false); // Close the menu when clicking outside
// //             }
// //         };

// //         if (mobileMenuSwitch) {
// //             document.addEventListener('mousedown', handleClickOutside);
// //         } else {
// //             document.removeEventListener('mousedown', handleClickOutside);
// //         }

// //         return () => {
// //             document.removeEventListener('mousedown', handleClickOutside); // Clean up listener on component unmount
// //         };
// //     }, [mobileMenuSwitch, setMobileMenuSwitch]);



// //     const [searchInput,setSearchInput]=useState("")

// //     const handleSearch = async()=>{
// //         const LoadingAlert = Swal.fire({text:"Please wait..."})
// //         Swal.showLoading();
// //             try{
// //                 const response = await axios.get(`https://www.glmarketplace.ng/api/get_products_by_name.php?searchTerm=${searchInput}`);
// //                 console.log(response.data)
// //                 navigate("/searchresultpage")
// //                 setSearchArray(response.data)
// //             }catch(error){
// //                 console.error(error)
// //             }finally{
// //                 LoadingAlert.close()
// //             }
// //     }       

// //     return (
// //         <div>
// //             <div className='HeaderWrap1'>
// //                 <img src={logo} alt="logo" onClick={() => navigate("/")} />
// //                 <div className='HeaderCenterWrap1'>
// //                     <div className='HeaderLanguageWrap1'>
// //                         <img src={flag} alt="flag" />
// //                         <p>|<span className='HeaderLang1'>EN</span>|<span className='HeaderLang1'>USD</span></p>
// //                     </div>
// //                     <div className='SearchBarWrap1'>
// //                         <input placeholder='Search Products'  onChange={(e)=>setSearchInput(e.target.value)}/>
// //                         <div className='SearchIconWrap1'>
// //                             <FaSearch className='SearchIcon1' onClick={handleSearch}/>
// //                         </div>
// //                     </div>
// //                     <div className='HeaderUserArea1'>
// //                         {!userInfo&&<p onClick={() => navigate("/userlogin")}>Sign In / Join</p>
// //                         }{!userInfo&&<span onClick={()=>navigate('/userdashboard')}>My Account <FaChevronRight className='HeaderUserAreaIcon1' /></span>
// //                         }{userInfo&&<span onClick={()=>navigate('/userdashboard')}>Hi , {userInfo.full_name.slice(0,6)} <FaChevronRight className='HeaderUserAreaIcon1' /></span>}
// //                     </div>
// //                 </div>
// //                 <div className='HeaderCartImgWrap1' onClick={() => navigate("/cartpage")}>
// //                     <div style={{ display: "flex" }}>
// //                         <FaCartPlus className='HeaderCartIcon1' /> <p>({totalQty})</p>
// //                     </div>
// //                     <p>${totalAmount.toFixed(2)}</p>
// //                 </div>
// //             </div>
// //             <div className='HeaderWrap2'>
// //                 <div className='HeaderWrap2Up'>
// //                     <FaHamburger className='FaBurger' onClick={() => setMobileMenuSwitch(true)} />
// //                     {mobileMenuSwitch && (
// //                         <div ref={sideMenuRef}>
// //                             <SideCategoryMenu2 />
// //                         </div>
// //                     )}
// //                     {/* <img src={flag} alt="flag" className='MobileFlag' /> */}
// //                     <img src={logo} alt="logo" onClick={() => navigate("/")} className='MobileLogo' />
// //                     <div style={{display:"flex",flexDirection:"column",cursor:"pointer"}} onClick={()=>navigate("/userdashboard")}>
// //                     <FaUserCircle className='FaUserCircle' /> {userInfo&&<p>Hi, {userInfo.full_name?.slice(0,1)}</p>}
// //                     </div> 
// //                     <div className='HeaderCartImgWrap1' style={{ marginRight: "0px" }} onClick={() => navigate("/cartpage")}>
// //                         <div style={{ display: "flex" }}>
// //                             <FaCartPlus className='HeaderCartIcon1' /> <p>({totalQty})</p>
// //                         </div>
// //                         <p>${totalAmount.toFixed(2)}</p>
// //                     </div>
// //                 </div>
// //                 <div className='HeaderWrap2Down'>
// //                     <div className='SearchBarWrap2'>
// //                         <input placeholder='Search Products' onChange={(e)=>setSearchInput(e.target.value)} />
// //                         <div className='SearchIconWrap2'>
// //                             <FaSearch className='SearchIcon2' onClick={handleSearch}/>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Header;



// import React, { useEffect, useState, useContext, useRef } from 'react';
// import { FaCartPlus, FaHamburger, FaSearch, FaChevronRight, FaUserCircle } from "react-icons/fa";
// import "../CSS/Header.css";
// import flag from "../Images/flag.png";
// import logo from "../Images/logo.jpeg";
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import SideCategoryMenu2 from './SideCategoryMenu2';
// import { Context } from './Context';
// import Swal from 'sweetalert2';
// import axios from 'axios';

// const Header = () => {
//     const userInfo = useSelector(state => state.userInfo);
//     const navigate = useNavigate();
//     const cart = useSelector(state => state.cartItems);
//     const [totalQty, setTotalQty] = useState(0);
//     const totalAmount = useSelector(state => state.totalAmount);
//     const { mobileMenuSwitch, setMobileMenuSwitch, setSearchArray } = useContext(Context);
//     const sideMenuRef = useRef(null); // Reference for the side menu

//     // Calculate the total quantity of items in the cart
//     useEffect(() => {
//         const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
//         setTotalQty(totalItems);
//     }, [cart]);

//     // Add event listener to detect clicks outside of SideCategoryMenu2
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
//                 setMobileMenuSwitch(false); // Close the menu when clicking outside
//             }
//         };

//         if (mobileMenuSwitch) {
//             document.addEventListener('mousedown', handleClickOutside);
//         } else {
//             document.removeEventListener('mousedown', handleClickOutside);
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside); // Clean up listener on component unmount
//         };
//     }, [mobileMenuSwitch, setMobileMenuSwitch]);

//     const [searchInput, setSearchInput] = useState("");

//     const handleSearch = async () => {
//         const LoadingAlert = Swal.fire({ text: "Please wait..." });
//         Swal.showLoading();
//         try {
//             const response = await axios.get(`https://www.glmarketplace.ng/api/get_products_by_name.php?searchTerm=${searchInput}`);
//             console.log(response.data);
//             if (response.data.success) {
//                 setSearchArray(response.data.products); // Set the search results in context
//                 navigate("/searchresultpage"); // Navigate to the results page
//             } else {
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Oops...',
//                     text: response.data.error,
//                 });
//             }
//         } catch (error) {
//             console.error(error);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'An error occurred while fetching products.',
//             });
//         } finally {
//             LoadingAlert.close();
//         }
//     };

//     return (
//         <div>
//             <div className='HeaderWrap1'>
//                 <img src={logo} alt="logo" onClick={() => navigate("/")} />
//                 <div className='HeaderCenterWrap1'>
//                     <div className='HeaderLanguageWrap1'>
//                         <img src={flag} alt="flag" />
//                         <p>|<span className='HeaderLang1'>EN</span>|<span className='HeaderLang1'>USD</span></p>
//                     </div>
//                     <div className='SearchBarWrap1'>
//                         <input placeholder='Search Products' onChange={(e) => setSearchInput(e.target.value)} />
//                         <div className='SearchIconWrap1'>
//                             <FaSearch className='SearchIcon1' onClick={handleSearch} />
//                         </div>
//                     </div>
//                     <div className='HeaderUserArea1'>
//                         {!userInfo && <p onClick={() => navigate("/userlogin")}>Sign In / Join</p>}
//                         {!userInfo && <span onClick={() => navigate('/userdashboard')}>My Account <FaChevronRight className='HeaderUserAreaIcon1' /></span>}
//                         {userInfo && <span onClick={() => navigate('/userdashboard')}>Hi, {userInfo.full_name.slice(0, 6)} <FaChevronRight className='HeaderUserAreaIcon1' /></span>}
//                     </div>
//                 </div>
//                 <div className='HeaderCartImgWrap1' onClick={() => navigate("/cartpage")}>
//                     <div style={{ display: "flex" }}>
//                         <FaCartPlus className='HeaderCartIcon1' /> <p>({totalQty})</p>
//                     </div>
//                     <p>${totalAmount.toFixed(2)}</p>
//                 </div>
//             </div>
//             <div className='HeaderWrap2'>
//                 <div className='HeaderWrap2Up'>
//                     <FaHamburger className='FaBurger' onClick={() => setMobileMenuSwitch(true)} />
//                     {mobileMenuSwitch && (
//                         <div ref={sideMenuRef}>
//                             <SideCategoryMenu2 />
//                         </div>
//                     )}
//                     <img src={logo} alt="logo" onClick={() => navigate("/")} className='MobileLogo' />
//                     <div style={{ display: "flex", flexDirection: "column", cursor: "pointer" }} onClick={() => navigate("/userdashboard")}>
//                         <FaUserCircle className='FaUserCircle' /> {userInfo && <p>Hi, {userInfo.full_name?.slice(0, 1)}</p>}
//                     </div>
//                     <div className='HeaderCartImgWrap1' style={{ marginRight: "0px" }} onClick={() => navigate("/cartpage")}>
//                         <div style={{ display: "flex" }}>
//                             <FaCartPlus className='HeaderCartIcon1' /> <p>({totalQty})</p>
//                         </div>
//                         <p>${totalAmount.toFixed(2)}</p>
//                     </div>
//                 </div>
//                 <div className='HeaderWrap2Down'>
//                     <div className='SearchBarWrap2'>
//                         <input placeholder='Search Products' onChange={(e) => setSearchInput(e.target.value)} />
//                         <div className='SearchIconWrap2'>
//                             <FaSearch className='SearchIcon2' onClick={handleSearch} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Header;







import React, { useEffect, useState, useContext, useRef } from 'react';
import { FaCartArrowDown, FaChevronCircleDown, FaHeart, FaHome, FaSearch, FaUser } from 'react-icons/fa';
import '../CSS/Header.css';
import { useNavigate,NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Context } from './Context';
import Swal from 'sweetalert2';
import axios from 'axios';


const Header = () => {
  const cart = useSelector((state) => state.cartItems);
  const wishlist = useSelector((state) => state.wishlist); // If used
  const userInfo = useSelector((state) => state.userInfo);
  const navigate = useNavigate();
  const { mobileMenuSwitch, setMobileMenuSwitch, setSearchArray, subCategories } = useContext(Context);
  const sideMenuRef = useRef(null);

  const [totalQty, setTotalQty] = useState(0);

  // Calculate cart total quantity
  useEffect(() => {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQty(totalItems);
  }, [cart]);

  // Handle click outside of menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        setMobileMenuSwitch(false);
      }
    };

    if (mobileMenuSwitch) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuSwitch]);

//   const handleSearch = () => {
//     // Search functionality here
//   };



  const [searchInput, setSearchInput] = useState("");

      const handleSearch = async () => {
        const LoadingAlert = Swal.fire({ text: "Please wait..." });
        Swal.showLoading();
        try {
            const response = await axios.get(`https://www.glmarketplace.ng/api/get_products_by_name.php?searchTerm=${searchInput}`);
            console.log(response.data);
            if (response.data.success) {
                setSearchArray(response.data.products); // Set the search results in context
                navigate("/searchresultpage"); // Navigate to the results page
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: response.data.error,
                });
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while fetching products.',
            });
        } finally {
            LoadingAlert.close();
        }
    };





  return (
    <div className="HeaderWrap">
      <div className="HeaderUp">
        <div className="HeaderUpLeft" onClick={() => navigate('/')}>
          <h2 style={{ cursor: 'pointer' }}>GL MARKETPLACE</h2>
        </div>
        <div className="HeaderUpMid">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search for products, brands and categories"
          />
          <div className="SearchIconWrap" onClick={handleSearch}>
            <FaSearch />
          </div>
        </div>
        <div className="HeaderUpRight">
          <div className="HeaderUpRight1" onClick={() => navigate('/')}>
            <FaHome style={{ cursor: 'pointer' }} />
            <p>Home</p>
          </div>
          <div
            className="HeaderUpRight2"
            onClick={() => navigate(userInfo ? '/userdashboard' : '/userlogin')}
          >
            <FaUser />
            <p>{userInfo ? 'Dashboard' : 'Sign up / Login'}</p>
          </div>
          <div className="HeaderUpRight1" onClick={() => navigate('/cartpage')}>
            <FaCartArrowDown />
            <p>Cart</p>
            <p>({totalQty})</p>
          </div>
        </div>
      </div>
      <div className="HeaderDown">
        {/* <NavLink to="/foodmart" className="Menu">FOOD MART</NavLink>
        <NavLink to="/kitchenutensils" className="Menu">KITCHEN UTENSILS</NavLink>
        <NavLink to="/fashion" className="Menu">FASHION (Samtoclassics)</NavLink>
        <NavLink to="/cookinggasandaccessories" className="Menu">COOKING GAS AND ACCESSORIES</NavLink>
        <NavLink to="/bellyinn" className="Menu">BELLY INN</NavLink>
        <NavLink to="/healthcare" className="Menu">HEALTH CARE (Healthy stops)</NavLink>
        <NavLink to="/blog" className="Menu">BLOG / DROP SHIPPING</NavLink>
        <NavLink to="/buyandsellfood" className="Menu">BUY AND SELL FOOD (Free public accounts)</NavLink> */}
         
         {subCategories.map((subCategory)=>(
        <p  className="Menu" onClick={() => navigate(`/productlistpage/${subCategory.name}`)}>{subCategory.name}</p>
      
      ))} 
      
      
      </div>
      <div className="HeaderDown2A" onClick={() => setMobileMenuSwitch(true)}>
        <p>
          Categories <FaChevronCircleDown />
        </p>
      </div>
      {mobileMenuSwitch && (
        <div className="HeaderDown2" ref={sideMenuRef}>
          {/* <NavLink to="/foodmart" className="Menu">FOOD MART</NavLink>
          <NavLink to="/kitchenutensils" className="Menu">KITCHEN UTENSILS</NavLink>
          <NavLink to="/fashion" className="Menu">FASHION (Samtoclassics)</NavLink>
          <NavLink to="/cookinggasandaccessories" className="Menu">COOKING GAS AND ACCESSORIES</NavLink>
          <NavLink to="/bellyinn" className="Menu">BELLY INN</NavLink>
          <NavLink to="/healthcare" className="Menu">HEALTH CARE (Healthy stops)</NavLink>
          <NavLink to="/blog" className="Menu">BLOG / DROP SHIPPING</NavLink>
          <NavLink to="/buyandsellfood" className="Menu">BUY AND SELL FOOD (Free public accounts)</NavLink> */}
               {subCategories.map((subCategory)=>(
        <p  className="Menu" onClick={() => {navigate(`/productlistpage/${subCategory.name}`);setMobileMenuSwitch(false)}}>{subCategory.name}</p>
      
      ))} 
        
        </div>
      )}
    </div>
  );
};

export default Header;


