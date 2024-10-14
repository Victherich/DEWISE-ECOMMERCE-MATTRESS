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
//     const userInfo = useSelector(state => state.userInfo)
//     const navigate = useNavigate();
//     const cart = useSelector(state => state.cartItems);
//     const [totalQty, setTotalQty] = useState(0);
//     const totalAmount = useSelector(state => state.totalAmount);
//     const { mobileMenuSwitch, setMobileMenuSwitch,searchArray,setSearchArray } = useContext(Context);
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



//     const [searchInput,setSearchInput]=useState("")

//     const handleSearch = async()=>{
//         const LoadingAlert = Swal.fire({text:"Please wait..."})
//         Swal.showLoading();
//             try{
//                 const response = await axios.get(`https://www.heovin.com.ng/api/get_products_by_name.php?searchTerm=${searchInput}`);
//                 console.log(response.data)
//                 navigate("/searchresultpage")
//                 setSearchArray(response.data)
//             }catch(error){
//                 console.error(error)
//             }finally{
//                 LoadingAlert.close()
//             }
//     }       

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
//                         <input placeholder='Search Products'  onChange={(e)=>setSearchInput(e.target.value)}/>
//                         <div className='SearchIconWrap1'>
//                             <FaSearch className='SearchIcon1' onClick={handleSearch}/>
//                         </div>
//                     </div>
//                     <div className='HeaderUserArea1'>
//                         {!userInfo&&<p onClick={() => navigate("/userlogin")}>Sign In / Join</p>
//                         }{!userInfo&&<span onClick={()=>navigate('/userdashboard')}>My Account <FaChevronRight className='HeaderUserAreaIcon1' /></span>
//                         }{userInfo&&<span onClick={()=>navigate('/userdashboard')}>Hi , {userInfo.full_name.slice(0,6)} <FaChevronRight className='HeaderUserAreaIcon1' /></span>}
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
//                     {/* <img src={flag} alt="flag" className='MobileFlag' /> */}
//                     <img src={logo} alt="logo" onClick={() => navigate("/")} className='MobileLogo' />
//                     <div style={{display:"flex",flexDirection:"column",cursor:"pointer"}} onClick={()=>navigate("/userdashboard")}>
//                     <FaUserCircle className='FaUserCircle' /> {userInfo&&<p>Hi, {userInfo.full_name?.slice(0,1)}</p>}
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
//                         <input placeholder='Search Products' onChange={(e)=>setSearchInput(e.target.value)} />
//                         <div className='SearchIconWrap2'>
//                             <FaSearch className='SearchIcon2' onClick={handleSearch}/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Header;



import React, { useEffect, useState, useContext, useRef } from 'react';
import { FaCartPlus, FaHamburger, FaSearch, FaChevronRight, FaUserCircle } from "react-icons/fa";
import "../CSS/Header.css";
import flag from "../Images/flag.png";
import logo from "../Images/logo.jpeg";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SideCategoryMenu2 from './SideCategoryMenu2';
import { Context } from './Context';
import Swal from 'sweetalert2';
import axios from 'axios';

const Header = () => {
    const userInfo = useSelector(state => state.userInfo);
    const navigate = useNavigate();
    const cart = useSelector(state => state.cartItems);
    const [totalQty, setTotalQty] = useState(0);
    const totalAmount = useSelector(state => state.totalAmount);
    const { mobileMenuSwitch, setMobileMenuSwitch, setSearchArray } = useContext(Context);
    const sideMenuRef = useRef(null); // Reference for the side menu

    // Calculate the total quantity of items in the cart
    useEffect(() => {
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        setTotalQty(totalItems);
    }, [cart]);

    // Add event listener to detect clicks outside of SideCategoryMenu2
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
                setMobileMenuSwitch(false); // Close the menu when clicking outside
            }
        };

        if (mobileMenuSwitch) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside); // Clean up listener on component unmount
        };
    }, [mobileMenuSwitch, setMobileMenuSwitch]);

    const [searchInput, setSearchInput] = useState("");

    const handleSearch = async () => {
        const LoadingAlert = Swal.fire({ text: "Please wait..." });
        Swal.showLoading();
        try {
            const response = await axios.get(`https://www.heovin.com.ng/api/get_products_by_name.php?searchTerm=${searchInput}`);
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
        <div>
            <div className='HeaderWrap1'>
                <img src={logo} alt="logo" onClick={() => navigate("/")} />
                <div className='HeaderCenterWrap1'>
                    <div className='HeaderLanguageWrap1'>
                        <img src={flag} alt="flag" />
                        <p>|<span className='HeaderLang1'>EN</span>|<span className='HeaderLang1'>USD</span></p>
                    </div>
                    <div className='SearchBarWrap1'>
                        <input placeholder='Search Products' onChange={(e) => setSearchInput(e.target.value)} />
                        <div className='SearchIconWrap1'>
                            <FaSearch className='SearchIcon1' onClick={handleSearch} />
                        </div>
                    </div>
                    <div className='HeaderUserArea1'>
                        {!userInfo && <p onClick={() => navigate("/userlogin")}>Sign In / Join</p>}
                        {!userInfo && <span onClick={() => navigate('/userdashboard')}>My Account <FaChevronRight className='HeaderUserAreaIcon1' /></span>}
                        {userInfo && <span onClick={() => navigate('/userdashboard')}>Hi, {userInfo.full_name.slice(0, 6)} <FaChevronRight className='HeaderUserAreaIcon1' /></span>}
                    </div>
                </div>
                <div className='HeaderCartImgWrap1' onClick={() => navigate("/cartpage")}>
                    <div style={{ display: "flex" }}>
                        <FaCartPlus className='HeaderCartIcon1' /> <p>({totalQty})</p>
                    </div>
                    <p>${totalAmount.toFixed(2)}</p>
                </div>
            </div>
            <div className='HeaderWrap2'>
                <div className='HeaderWrap2Up'>
                    <FaHamburger className='FaBurger' onClick={() => setMobileMenuSwitch(true)} />
                    {mobileMenuSwitch && (
                        <div ref={sideMenuRef}>
                            <SideCategoryMenu2 />
                        </div>
                    )}
                    <img src={logo} alt="logo" onClick={() => navigate("/")} className='MobileLogo' />
                    <div style={{ display: "flex", flexDirection: "column", cursor: "pointer" }} onClick={() => navigate("/userdashboard")}>
                        <FaUserCircle className='FaUserCircle' /> {userInfo && <p>Hi, {userInfo.full_name?.slice(0, 1)}</p>}
                    </div>
                    <div className='HeaderCartImgWrap1' style={{ marginRight: "0px" }} onClick={() => navigate("/cartpage")}>
                        <div style={{ display: "flex" }}>
                            <FaCartPlus className='HeaderCartIcon1' /> <p>({totalQty})</p>
                        </div>
                        <p>${totalAmount.toFixed(2)}</p>
                    </div>
                </div>
                <div className='HeaderWrap2Down'>
                    <div className='SearchBarWrap2'>
                        <input placeholder='Search Products' onChange={(e) => setSearchInput(e.target.value)} />
                        <div className='SearchIconWrap2'>
                            <FaSearch className='SearchIcon2' onClick={handleSearch} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

