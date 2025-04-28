import React, { useState } from 'react'
import { createContext } from 'react'
import logo1 from '../Images3/moukalogo.png'
import logo2 from '../Images3/unifoamlogo.png'
import logo3 from '../Images3/greenearth.jpeg'
import logo4 from '../Images3/vonologo.png'
import logo5 from '../Images3/olivefoam.jpeg'
import logo6 from '../Images3/vitafoamlogo.png'

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



const subCategories = [
  { id: 4,  name: 'Mouka Foam',  logo:logo1},
  { id: 5,  name: 'UniFoam',  logo:logo2},
  // { id: 6,  name: 'Green Earth',  logo:logo3},
  // { id: 7,  name: 'Vono' , logo:logo4},
  // { id: 8,  name: 'Olive Foam', logo:logo5 },
  // { id: 9,  name: 'Vita Foam' , logo:logo6},
 
  {id:11, name:'Eco Foam '},
  {id:2, name:'Vision Foam'},
  {id:13,name:"Whale Foam"},
  {id:12, name:'Pillows'},
  { id: 10, name: 'Foot Marts' },

];







const featuredProducts = [
  {
    "id": 1,
    "name": "Eco Foam",
    "featuredFoam": [
      { "size": "6x4.5x8", "price": 91000 },
      { "size": "6x4.5x10", "price": 120000 },
      { "size": "6x4.5x12", "price": 145000 },
      { "size": "6x4.5x14", "price": 150000 },
      { "size": "6x4.5x16", "price": 175000 },
      { "size": "6x4.5x18", "price": 190000 },
      { "size": "6x4.5x20", "price": 220000 },
      { "size": "6x6x8", "price": 120000 },
      { "size": "6x6x10", "price": 160000 },
      { "size": "6x6x12", "price": 180000 },
      { "size": "6x6x14", "price": 200000 },
      { "size": "6x6x16", "price": 230000 },
      { "size": "6x6x18", "price": 270000 },
      { "size": "6x6x20", "price": 300000 }
    ],
    "images": ["/fp1.jpg", "/fp2.jpg", "/fp3.jpg"]
  },
  {
    "id": 2,
    "name": "Eco Foam",
    "featuredFoam": [
      { "size": "6x2.5x4", "price": 25000 },
      { "size": "6x2.5x6", "price": 35000 },
      { "size": "6x3x6", "price": 50000 },
      { "size": "6x3x8", "price": 55000 },
      { "size": "6x3.5x6", "price": 65000 },
      { "size": "6x3.5x8", "price": 70000 },
      { "size": "6x4x8", "price": 84000 },
      { "size": "6x4.5x8", "price": 90000 },
      { "size": "6x4.5x10", "price": 120000 },
      { "size": "6x4.5x12", "price": 145000 }
    ],
    "images": ["fp4.jpg", "fp5.jpg", "fp6.jpg"]
  },
  {
    "id": 3,
    "name": "Vision Foam (semi-orthopaedic)",
    "featuredFoam": [
      { "size": "6x4.5x8", "price": 140000 },
      { "size": "6x4.5x10", "price": 160000 },
      { "size": "6x4.5x12", "price": 190000 },
      { "size": "6x4.5x14", "price": 200000 },
      { "size": "6x4.5x16", "price": 220000 },
      { "size": "6x4.5x18", "price": 270000 },
      { "size": "6x4.5x20", "price": 300000 },
      { "size": "6x6x8", "price": 170000 },
      { "size": "6x6x10", "price": 220000 },
      { "size": "6x6x12", "price": 240000 },
      { "size": "6x6x14", "price": 280000 },
      { "size": "6x6x16", "price": 330000 },
      { "size": "6x6x18", "price": 400000 },
      { "size": "6x6x20", "price": 450000 }
    ],
    "images": ["fp7.jpg", "fp8.jpg", "fp9.jpg"]
  },
  {
    "id": 4,
    "name": "Vision Foam (semi-orthopaedic)",
    "featuredFoam": [
      { "size": "6x4.5x8", "price": 140000 },
      { "size": "6x4.5x10", "price": 160000 },
      { "size": "6x4.5x12", "price": 190000 },
      { "size": "6x4.5x14", "price": 200000 },
      { "size": "6x4.5x16", "price": 220000 },
      { "size": "6x4.5x18", "price": 270000 },
      { "size": "6x4.5x20", "price": 300000 },
      { "size": "6x6x8", "price": 170000 },
      { "size": "6x6x10", "price": 220000 },
      { "size": "6x6x12", "price": 240000 },
      { "size": "6x6x14", "price": 280000 },
      { "size": "6x6x16", "price": 330000 },
      { "size": "6x6x18", "price": 400000 },
      { "size": "6x6x20", "price": 450000 }
    ],
    "images": ["fp10.jpg", "fp11.jpg", "fp12.jpg"]
  },
  {
    "id": 5,
    "name": "Unifoam (Jade)",
    "featuredFoam": [
      { "size": "6x2.5x4", "price": 20000 },
      { "size": "6x2.5x6", "price": 30000 },
      { "size": "6x3x6", "price": 35000 },
      { "size": "6x3x8", "price": 45000 },
      { "size": "6x3.5x6", "price": 38000 },
      { "size": "6x3.5x8", "price": 50000 },
      { "size": "6x4x8", "price": 55000 },
      { "size": "6x4.5x8", "price": 70000 },
      { "size": "6x4.5x10", "price": 85000 },
      { "size": "6x4.5x12", "price": 105000 }
    ],
    "images": ["fp13.jpg", "fp14.jpg", "fp15.jpg"]
  },
  {
    "id": 6,
    "name": "Eco Foam (orthopaedic)",
    "featuredFoam": [
      { "size": "6x4.5x8", "price": 200000 },
      { "size": "6x4.5x10", "price": 240000 },
      { "size": "6x4.5x12", "price": 270000 },
      { "size": "6x6x8", "price": 280000 },
      { "size": "6x6x10", "price": 320000 },
      { "size": "6x6x12", "price": 350000 }
    ],
    "images": ["fp16.jpg", "fp17.jpg", "fp18.jpg"]
  },
  {
    "id": 7,
    "name": "Eco Foam (orthopaedic)",
    "featuredFoam": [
      { "size": "6x4.5x8", "price": 200000 },
      { "size": "6x4.5x10", "price": 240000 },
      { "size": "6x4.5x12", "price": 270000 },
      { "size": "6x6x8", "price": 280000 },
      { "size": "6x6x10", "price": 320000 },
      { "size": "6x6x12", "price": 350000 }
    ],
    "images": ["fp19.jpg", "fp20.jpg", "fp21.jpg"]
  },
  {
    "id": 8,
    "name": "Eco Foam (orthopaedic)",
    "featuredFoam": [
      { "size": "6x4.5x8", "price": 200000 },
      { "size": "6x4.5x10", "price": 240000 },
      { "size": "6x4.5x12", "price": 270000 },
      { "size": "6x6x8", "price": 280000 },
      { "size": "6x6x10", "price": 320000 },
      { "size": "6x6x12", "price": 350000 }
    ],
    "images": ["fp22.jpg", "fp23.jpg", "fp24.jpg"]
  },


  {
    "id": 9,
    "name": "Mouka Foam (Flora)",
    "featuredFoam": [
      { "size": "6x4.5x8", "price": 120000 },
      { "size": "6x4.5x10", "price": 140000 },
      { "size": "6x4.5x12", "price": 165000 },
      { "size": "6x4.5x14", "price": 175000 },
      { "size": "6x4.5x16", "price": 210000 },
      { "size": "6x4.5x18", "price": 230000 },
      { "size": "6x4.5x20", "price": 270000 },
      { "size": "6x6x8", "price": 140000 },
      { "size": "6x6x10", "price": 190000 },
      { "size": "6x6x12", "price": 220000 },
      { "size": "6x6x14", "price": 230000 },
      { "size": "6x6x16", "price": 270000 },
      { "size": "6x6x18", "price": 320000 },
      { "size": "6x6x20", "price": 335000 }
    ],
    "images": ["fp25.jpg", "fp26.jpg", "fp27.jpg"]
  },
  {
    "id": 10,
    "name": "Mouka Foam (Flora)",
    "featuredFoam": [
      { "size": "6x4.5x8", "price": 120000 },
      { "size": "6x4.5x10", "price": 140000 },
      { "size": "6x4.5x12", "price": 165000 },
      { "size": "6x4.5x14", "price": 175000 },
      { "size": "6x4.5x16", "price": 210000 },
      { "size": "6x4.5x18", "price": 230000 },
      { "size": "6x4.5x20", "price": 270000 },
      { "size": "6x6x8", "price": 140000 },
      { "size": "6x6x10", "price": 190000 },
      { "size": "6x6x12", "price": 220000 },
      { "size": "6x6x14", "price": 230000 },
      { "size": "6x6x16", "price": 270000 },
      { "size": "6x6x18", "price": 320000 },
      { "size": "6x6x20", "price": 335000 }
    ],
    "images": ["fp28.jpg", "fp29.jpg", "fp30.jpg"]
  },
  {
    "id": 11,
    "name": "Muoka Foam (Orthopaedic)",
    "featuredFoam": [
      { "size": "6x4.5x8", "price": 255000 },
      { "size": "6x4.5x10", "price": 310000 },
      { "size": "6x6x8", "price": 340000 },
      { "size": "6x6x10", "price": 420000 },
      { "size": "6x7x10", "price": 505000 }
    ],
    "images": ["fp31.jpg", "fp32.jpg", "fp33.jpg"]
  },
  {
    "id": 12,
    "name": "Unifoam (Onyx Plus)",
    "featuredFoam": [
      { "size": "6x4.5x8", "price": 100000 },
      { "size": "6x4.5x10", "price": 125000 },
      { "size": "6x4.5x12", "price": 150000 },
      { "size": "6x4.5x14", "price": 155000 },
      { "size": "6x4.5x16", "price": 185000 },
      { "size": "6x4.5x18", "price": 195000 },
      { "size": "6x4.5x20", "price": 230000 },
      { "size": "6x6x8", "price": 130000 },
      { "size": "6x6x10", "price": 165000 },
      { "size": "6x6x12", "price": 185000 },
      { "size": "6x6x14", "price": 205000 },
      { "size": "6x6x16", "price": 235000 },
      { "size": "6x6x18", "price": 275000 },
      { "size": "6x6x20", "price": 300000 }
    ],
    "images": ["fp34.jpg", "fp35.jpg", "fp36.jpg"]
  },
  {
    "id": 13,
    "name": "Unifoam (Jade)",
    "featuredFoam": [
      { "size": "6x2.5x4", "price": 20000 },
      { "size": "6x2.5x6", "price": 30000 },
      { "size": "6x3x6", "price": 35000 },
      { "size": "6x3x8", "price": 45000 },
      { "size": "6x3.5x6", "price": 38000 },
      { "size": "6x3.5x8", "price": 50000 },
      { "size": "6x4x8", "price": 55000 },
      { "size": "6x4.5x8", "price": 70000 },
      { "size": "6x4.5x10", "price": 85000 },
      { "size": "6x4.5x12", "price": 105000 }
    ],
    "images": ["fp37.jpg", "fp38.jpg", "fp39.jpg"]
  },
  {
    "id": 14,
    "name": "Unifoam (Onyx Plus)",
    "featuredFoam": [
      { "size": "6x4.5x8", "price": 100000 },
      { "size": "6x4.5x10", "price": 125000 },
      { "size": "6x4.5x12", "price": 150000 },
      { "size": "6x4.5x14", "price": 155000 },
      { "size": "6x4.5x16", "price": 185000 },
      { "size": "6x4.5x18", "price": 195000 },
      { "size": "6x4.5x20", "price": 230000 },
      { "size": "6x6x8", "price": 130000 },
      { "size": "6x6x10", "price": 165000 },
      { "size": "6x6x12", "price": 185000 },
      { "size": "6x6x14", "price": 205000 },
      { "size": "6x6x16", "price": 235000 },
      { "size": "6x6x18", "price": 275000 },
      { "size": "6x6x20", "price": 300000 }
    ],
    "images": ["fp40.jpg", "fp41.jpg", "fp42.jpg"]
  },
  {
    "id": 15,
    "name": "Unifoam (Sapphire) semi-orthopaedic",
    "featuredFoam": [
      { "size": "6x4.5x8", "price": 135000 },
      { "size": "6x4.5x10", "price": 160000 },
      { "size": "6x4.5x12", "price": 190000 },
      { "size": "6x6x8", "price": 170000 },
      { "size": "6x6x10", "price": 220000 },
      { "size": "6x6x12", "price": 240000 }
    ],
    "images": ["fp43.jpg", "fp44.jpg", "fp45.jpg"]
  },
  {
    "id": 16,
    "name": "Mouka Foam (Flora)",
    "featuredFoam": [
      { "size": "6x4.5x8", "price": 120000 },
      { "size": "6x4.5x10", "price": 140000 },
      { "size": "6x4.5x12", "price": 165000 },
      { "size": "6x4.5x14", "price": 175000 },
      { "size": "6x4.5x16", "price": 210000 },
      { "size": "6x4.5x18", "price": 230000 },
      { "size": "6x4.5x20", "price": 270000 },
      { "size": "6x6x8", "price": 140000 },
      { "size": "6x6x10", "price": 190000 },
      { "size": "6x6x12", "price": 220000 },
      { "size": "6x6x14", "price": 230000 },
      { "size": "6x6x16", "price": 270000 },
      { "size": "6x6x18", "price": 320000 },
      { "size": "6x6x20", "price": 335000 }
    ],
    "images": ["fp46.jpg", "fp47.jpg", "fp48.jpg"]
  },
  {
    "id": 17,
    "name": "Unifoam (Sapphire) semi-orthopaedic",
    "featuredFoam": [
      { "size": "6x4.5x8", "price": 135000 },
      { "size": "6x4.5x10", "price": 160000 },
      { "size": "6x4.5x12", "price": 190000 },
      { "size": "6x6x8", "price": 170000 },
      { "size": "6x6x10", "price": 220000 },
      { "size": "6x6x12", "price": 240000 }
    ],
    "images": ["fp49.jpg", "fp50.jpg", "fp51.jpg"]
  },
]




  return (
    <Context.Provider value={{adminToken,setAdminToken,admin,setAdmin,adminMenu,
    setAdminMenu,trackingID,setTrackingID,orderSendEmailUrl,mobileMenuSwitch,setMobileMenuSwitch,searchArray,setSearchArray,
    isChatVisible,setIsChatVisible,subCategories, featuredProducts}}>

        {children}
    </Context.Provider>
      

  )
}

export default ContextProvider


// database details
// User : “dewisemattress_dewisemattress” was added to the database “dewisemattress_db1”.
// pw: dewise@2023



// chat details
// email: support@glmarketplace.ng
// url: https://dashboard.tawk.to/login
// pw: #Glm123glm