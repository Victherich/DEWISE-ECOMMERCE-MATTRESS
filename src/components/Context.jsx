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
    const [isChatVisible, setIsChatVisible] = useState(false);

const orderSendEmailUrl="https://hotsalesngonboarding.onrender.com/api/send-order-summary"


// const subCategories = [
//   { id: 4,  name: 'Crazy Deals' },
//   { id: 5,  name: 'Supplements' },
//   { id: 6,  name: 'Vitamins' },
//   { id: 7,  name: 'Essential Oils' },
//   { id: 8,  name: 'Herbs' },
//   { id: 9,  name: 'Beauty' },
//   { id: 10, name: 'Weight Support' },
//   { id: 11, name: 'Sports' },
//   { id: 12, name: 'Joint Support' },
// ];


const subCategories = [
  { id: 4,  name: 'Electronics' },
  { id: 5,  name: 'Phones and Accessories' },
  { id: 6,  name: 'Kitchen Utensils' },
  { id: 7,  name: 'Fashion' },
  { id: 8,  name: 'Food and Beverages' },
  { id: 9,  name: 'Health' },
  { id: 10, name: 'Beauty and Cosmetics' },
  { id: 11, name: 'Sports Wears' },
  { id: 12, name: 'Crazy deals' },
];


  return (
    <Context.Provider value={{adminToken,setAdminToken,admin,setAdmin,adminMenu,
    setAdminMenu,trackingID,setTrackingID,orderSendEmailUrl,mobileMenuSwitch,setMobileMenuSwitch,searchArray,setSearchArray,
    isChatVisible,setIsChatVisible,subCategories}}>

        {children}
    </Context.Provider>
      

  )
}

export default ContextProvider


// database details
// User “glmarketplace_db1” was added to the database “glmarketplace_db1”.
// pw: dave@decafe2025
