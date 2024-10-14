import React, { useState } from 'react'
import { createContext } from 'react'

export const Context = createContext();

const ContextProvider = ({children}) => {
    const [adminToken,setAdminToken]=useState(null)
    const [admin,setAdmin]=useState(null)
    const [adminMenu,setAdminMenu]=useState(0) 
    const [trackingID, setTrackingID] = useState('');
    const [mobileMenuSwitch,setMobileMenuSwitch]=useState(false)
    const [searchArray,setSearchArray]=useState([])

const orderSendEmailUrl="https://hotsalesngonboarding.onrender.com/api/send-order-summary"
  return (
    <Context.Provider value={{adminToken,setAdminToken,admin,setAdmin,adminMenu,
    setAdminMenu,trackingID,setTrackingID,orderSendEmailUrl,mobileMenuSwitch,setMobileMenuSwitch,searchArray,setSearchArray}}>

        {children}
    </Context.Provider>
      

  )
}

export default ContextProvider


// database details
// password : Abc555@them
// User: heovincom_db1
// Database: heovincom_db1
