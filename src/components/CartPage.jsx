// import React from 'react'
// import "../CSS/CartPage.css"
// import cartsidebar from "../Images/cartsidebar.png"
// import { useNavigate } from 'react-router-dom'
// import product1 from "../Images/product1.png"

// const CartPage = () => {
//     const navigate = useNavigate()
//   return (
//     <div className='CartWrap'>
//       <div className='CartLeft'>
//         <div className='CartLeftUp'>
//         Shopping Cart (0 Items)
//         </div>
//         <div className='CartLeftDown'>
//             <div>
//             Your Shopping Cart is empty
//             </div>
//             <div className='CartItems'>
//                 <div className='CartItemsTitles'>
//                     <p>Items</p>
//                     <p style={{marginLeft:"385px"}}>Price</p>
//                     <p style={{marginLeft:"190px"}}>Quantity</p>
//                     <p style={{marginLeft:"180px"}}>Subtotal</p>
//                 </div>
//                 <div className='CartItemsLine'></div>
//                 <div className='CartItem'>
//                     <div className='CartItemImgandTextWrap'>
//                     <img src={product1} alt="cartItemImg"/>
//                     <div className='CartItemTextWrap'>
//                         <p style={{fontWeight:"bold"}}>Title</p>
//                         <p>Description</p>
//                         <div className='CartItemQtyWrapMobile'>
//                         <p style={{fontWeight:"500"}}>-</p>
//                         <p style={{backgroundColor:"white"}}>2</p>
//                         <p style={{fontWeight:"500"}}>+</p>
                        
//                     </div> 
//                     <span className='SubTotalMobile'>$19.99</span>
//                     </div>
//                     </div>
//                     <p className='UnitPrice'>$9.99</p>
//                     <div className='CartItemQtyWrap'>
//                         <p style={{fontWeight:"500"}}>-</p>
//                         <p style={{backgroundColor:"white"}}>2</p>
//                         <p style={{fontWeight:"500"}}>+</p>
//                     </div>  
//                     <p className='SubTotal'>$19.99</p>
//                 </div>
//             </div>
//         </div>
//       </div>        
//       <div className='CartRight'> 
//             <button onClick={()=>navigate("/subcategory")}>Continue Shopping</button>
//             {/* <img src={cartsidebar} alt="cartpagesideimg"/> */}
          
//                 <div className='PromoCode'>
//                     <p>Have a Code?</p>
//                     <div className='PromoCodeInputWrap'><input placeholder='Enter a code here'/><button>Apply</button></div>
//                 </div>

//                 <div className='CartSummary'>
//                     <h3>Cart Summary</h3>
//                     <div className='SubTotalWrap'>
//                         <p>Sub total (0 Items)</p>
//                         <p>$0.00</p>
//                     </div>
//                     <div className='Line'></div>
//                     <div className='TotalWrap'>
//                         <p>Order Total:</p>
//                         <p style={{color:"orangeRed"}}>$0.00</p>    
//                     </div>
//                     <p style={{fontWeight:"bold",fontSize:"0.9rem",margin:"10px"}}>By placing order, you agree to Heovin's <span style={{textDecoration:"underline"}}>Terms of Use</span> and <span style={{  textDecoration:"underline"}}>Privacy policy</span></p>  
//                     <button 
//                     onClick={()=>navigate("/ordersummarypage")}
//                     style={{width:"90%",fontWeight:"bold",backgroundColor:"orange",color:"black",fontSize:"1rem",margin:"0 auto"}}>Checkout</button>
//                 </div>
            
//       </div>
//     </div>
//   )
// }

// export default CartPage



import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCartQuantity, removeFromCart } from '../Features/Slice'; // Import actions
import "../CSS/CartPage.css";   
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, totalQuantity, totalAmount } = useSelector(state => state); // Access cart state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) {
      // If quantity is less than 1, remove the item from the cart
      dispatch(removeFromCart(id));
    } else {
      // Otherwise, update the quantity
      dispatch(updateCartQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <div className='CartWrap'>
      <div className='CartLeft'>
        <div className='CartLeftUp'>
          Shopping Cart
        </div>
        <div className='CartLeftDown'>
          {cartItems.length === 0 ? (
            <div>Your Shopping Cart is empty</div>
          ) : (
            <div className='CartItems'>
              <div className='CartItemsTitles'>
                <p>Items</p>
                {/* <p style={{ marginLeft: "385px" }}>Price</p>
                <p style={{ marginLeft: "190px" }}>Quantity</p>
                <p style={{ marginLeft: "180px" }}>Subtotal</p> */}
              </div>
              <div className='CartItemsLine'></div>
              {cartItems.map(item => (
          
                  <div className='CartItem' key={item.id}>
                  <div className='CartItemImgandTextWrap'>
                    <img src={`https://www.heovin.com.ng/api/uploads/${item.image}`} alt="cartItemImg" />
                    <div className='CartItemTextWrap'>
                      <p style={{ fontWeight: "bold",marginTop:"10px" }}>{item.productName}</p>
                      <p style={{marginTop:"10px"}}>${item.price}</p>
                      <p style={{fontSize:"0.7rem"}}>Product ID: {item.id}</p>
                    </div>
                  </div>
                  {/* <p className='UnitPrice' style={{marginTop:"10px"}}><strong style={{marginRight:"5px"}}>Unit Price: </strong>  ${item.price}</p> */}
                  <div className='CartItemQtyWrap'>
                    <p onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</p>
                    <p style={{ backgroundColor: "white" }}>{item.quantity}</p>
                    <p onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</p>
                  </div>
                  <p className='SubTotal' style={{marginTop:"10px"}}><strong style={{marginRight:"5px"}}>Subtotal:</strong> ${item.subtotal.toFixed(2)}</p>
                  </div>
        
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='CartRight'>
        <button onClick={() => navigate("/")} className='ContinueShoppingButton'>Continue Shopping</button>

        <div className='PromoCode'>
          <p>Have a Code?</p>
          <div className='PromoCodeInputWrap'>
            <input placeholder='Enter a code here' />
            <button>Apply</button>
          </div>
        </div>

        <div className='CartSummary'>
          <h3>Cart Summary</h3>
          {/* <div className='SubTotalWrap'>
            <p>Sub total ({totalQuantity} Items)</p>
            <p>${totalAmount.toFixed(2)}</p>
          </div> */}
          <div className='Line'></div>
          <div className='TotalWrap'>
            <p>Order Total:</p>
            <p style={{ color: "orangeRed" }}>${totalAmount.toFixed(2)}</p>
          </div>
          <button
            onClick={() => navigate("/deliverydetailpage")}
            style={{ width: "90%", fontWeight: "bold", backgroundColor: "orange", color: "black", fontSize: "1rem", margin: "0 auto" }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
