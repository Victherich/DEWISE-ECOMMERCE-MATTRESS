import React, { useContext, useState } from 'react'
// import AdminDashborad from './AdminDashborad'
// import Outlet from "react-router-dom"
import { Navigate,Outlet } from 'react-router-dom'
import { Context } from './Context'
import { useSelector } from 'react-redux'

const PrivateUserSignUp = () => {
   
   const userToken = useSelector(state=>state.userToken)
    
  return (
   userToken?<Navigate to="/"/>:<Outlet/>
  )
}

export default PrivateUserSignUp
