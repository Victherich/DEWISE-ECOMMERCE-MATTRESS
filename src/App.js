import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route, Router} from "react-router-dom"
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import SubCategoryPage from './components/SubCategoryPage';
import FooterDown from './components/FooterDown';
import FooterUp from './components/FooterUp';
import ProductListPage from './components/ProductListPage';
import ProductDetail from './components/ProductDetail';
import MenuCategories from './components/MenuCategories';
import CartPage from './components/CartPage';
import OrderSummaryPage from './components/OrderSummaryPage';
import UserLogin from './components/UserLogin';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import PrivateAdminDashboard from './components/PrivateAdminDashboard';
import UserSignup from './components/UserSignUp';
import AdminVerifyEmail from './components/AdminVerifyEmail';
import AdminForgotPassword from './components/AdminForgotPassword';
import AdminResetPassword from './components/AdminResetPassword';
import DeliveryDetailPage from './components/DeliveryDetailPage';
import ScrollToTop from './components/ScrollToTop';
import UserVerifyEmail from './components/UserVerifyEmail';
import UserForgotPassword from './components/UserForgotPassword';
import UserResetPassword from './components/UserResetPassword';
import UserDashboard from './components/UserDashboard';
import PrivateUserDashboard from './components/PrivateUserDashboard';
import AdminSignup from './components/AdminSignUp';
import SearchResultPage from './components/SearchResultPage';
import PrivateDeliveryDetail from './components/PrivateDeliveryDetail';
import PrivateOrderSummary from './components/PrivateOrderSummary';
import PrivateUserLogin from './components/PrivateUserLogin';
import PrivateUserSignUp from './components/PrivateUserSignUp.jsx';
import AboutUs from './components/AboutUs.jsx';
import ContactUs from './components/ContactUs.jsx';
import LiveChatWidget from './components/LiveChatWidget.jsx';



function App() {
  return (
   <BrowserRouter>
   <ScrollToTop/>
    <Header/>
    <MenuCategories/>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      {/* <Route path="/subcategory" element={<SubCategoryPage/>}/> */}
      <Route path = "/productlistpage" element ={<ProductListPage/>}/>
      <Route path="/productdetail/:productId" element={<ProductDetail/>}/> 
      <Route path="/cartpage" element={<CartPage/>}/>
      {/* <Route path = "/ordersummarypage" element={<OrderSummaryPage/>}/> */}
      {/* <Route path="/userlogin" element={<UserLogin/>}/> */}
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path='/verify/:token' element={<AdminVerifyEmail/>}/>
      {/* <Route path='/deliverydetailpage' element={<DeliveryDetailPage/>}/> */}
    
      <Route path='/adminforgotpassword' element={<AdminForgotPassword/>}/>
      {/* <Route path="usersignup" element={<UserSignup/>}/> */}
      <Route path="/reset-password/:token" element={<AdminResetPassword/>}/>
          {/* <Route path="/adminsignup" element={<AdminSignup/>}/> */}
      <Route path="/admin" element={<PrivateAdminDashboard />}>
          <Route path="" element={<AdminDashboard />} />
        </Route>

        <Route path='/verifyuser/:token' element={<UserVerifyEmail/>}/>
        <Route path='/userforgotpassword' element={<UserForgotPassword/>}/>
        <Route path="/user-reset-password/:token" element={<UserResetPassword/>}/>

        <Route path="/userdashboard" element={<PrivateUserDashboard />}>
          <Route path="" element={<UserDashboard />} />
        </Route>
        <Route path="/deliverydetailpage" element={<PrivateDeliveryDetail />}>
          <Route path="" element={<DeliveryDetailPage />} />
        </Route>
        <Route path="/ordersummarypage" element={<PrivateOrderSummary />}>
          <Route path="" element={<OrderSummaryPage />} />
        </Route>
        <Route path="/userlogin" element={<PrivateUserLogin />}>
          <Route path="" element={<UserLogin />} />
        </Route>

        <Route path="/usersignup" element={<PrivateUserSignUp/>}>
          <Route path="" element={<UserSignup />} />
        </Route>


        <Route path="/searchresultpage" element={<SearchResultPage/>}/>

        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>

    </Routes>
    <LiveChatWidget/>
    <FooterUp/>
    <FooterDown/>
   </BrowserRouter>
  )
}

export default App;
