import React, { useContext, useRef, useState,useEffect } from 'react';
import Swal from 'sweetalert2';
// import AdminPostShipment from './AdminPostShipment';
import "../CSS/AdminDashboard.css";
import AdminProfile from './AdminProfile';
// import ManageShipments from './ManageShipments';
import { Context } from './Context';
import AdminSignup from './AdminSignUp';
import { userLogout } from '../Features/Slice';
import { useDispatch, useSelector } from 'react-redux';
import UploadProduct from './UploadProduct';
import ManageProducts from './ManageProducts';
import ProductByCategory from './ProductByCategory';
import { FaBars, FaHamburger } from 'react-icons/fa';
import UserProfile from './UserProfile';


const UserDashboard = () => {
    const userInfo = useSelector(state => state.userInfo)
  const { adminMenu, setAdminMenu, setAdminToken } = useContext(Context);
  const dispatch = useDispatch()
  const handleLogout = () => {
    Swal.fire({
      // title: 'Are you sure?',
      text: 'Do you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
       dispatch(userLogout()); // Perform the logout action
        Swal.fire(
          'Logged Out!',
          'You have been logged out.',
          'success'
        );
      }
    });
  };

const [display,setDisplay]=useState("")
const sideMenuRef = useRef(null)
useEffect(() => {
    const handleClickOutside = (event) => {
        if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
            setDisplay(''); // Close the menu when clicking outside
        }
    };

    if (display) {
        document.addEventListener('mousedown', handleClickOutside);
    } else {
        document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
        document.removeEventListener('mousedown', handleClickOutside); // Clean up listener on component unmount
    };
}, [display, setDisplay]);


  return (
    <div className='AdminDashboard'>
        <FaBars className='Bars' onClick={()=>setDisplay("flex")}/>
      <div className='AdminDashboardMenu' style={{display:display}} ref={sideMenuRef}>
        <p className="AdminDashboardMenuP" style={{ color: "rgba(0,0,0,0.7", cursor: "none" }}>Hi, {userInfo.full_name.slice(0,6)}</p>
        <p onClick={() => {setAdminMenu(0);setDisplay("")}} className={adminMenu === 0 ? 'AdminDashboardMenuPActive' : 'AdminDashboardMenuP'}>User Info</p>
        {/* <p onClick={() => {setAdminMenu(1);setDisplay("")}} className={adminMenu === 1 ? 'AdminDashboardMenuPActive' : 'AdminDashboardMenuP'}>Post Product</p> */}
        {/* <p onClick={() => {setAdminMenu(2);setDisplay("")}} className={adminMenu === 2 ? 'AdminDashboardMenuPActive' : 'AdminDashboardMenuP'}>Manage Products</p> */}
        {/* <p onClick={() => {setAdminMenu(3);setDisplay("")}} className={adminMenu === 3 ? 'AdminDashboardMenuPActive' : 'AdminDashboardMenuP'}>Register an Admin</p> */}
        <p onClick={handleLogout} className='AdminDashboardMenuP'>Logout</p>
      </div>
      <div className='AdminDashboardContentWrap'>
        {adminMenu === 0 && <UserProfile />}
        {/* {adminMenu === 1 && <UploadProduct setAdminMenu={setAdminMenu}/>} */}
        
        {/* {adminMenu === 2 && <ProductByCategory/>} */}
        {/* {adminMenu === 3 &&<AdminSignup/>} */}
      </div>
    </div>
  );
};

export default UserDashboard;
