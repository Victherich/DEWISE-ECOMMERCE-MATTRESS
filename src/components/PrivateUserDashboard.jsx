import React, { useContext, useState } from 'react'
// import AdminDashborad from './AdminDashborad'
// import Outlet from "react-router-dom"
import { Navigate,Outlet } from 'react-router-dom'
import { Context } from './Context'
import { useSelector } from 'react-redux'

const PrivateUserDashboard = () => {
   
   const userToken = useSelector(state=>state.userToken)
    
  return (
   userToken?<Outlet/>:<Navigate to="/userlogin"/>
  )
}

export default PrivateUserDashboard
