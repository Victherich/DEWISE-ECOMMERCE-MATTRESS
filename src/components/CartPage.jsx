


import React, { useState,useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCartQuantity, removeFromCart } from '../Features/Slice'; // Import actions
import "../CSS/CartPage.css";   
import { useNavigate } from 'react-router-dom';
import { use } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Context } from './Context';

const CartPage = () => {
  // const { cartItems, totalQuantity, totalAmount } = useSelector(state => state); // Access cart state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cartItems, setCartItems]=useState([])
  const [error, setError]=useState('')
const userId = useSelector(state=>state.userInfo?.id)
const [cartTotal, setCartTotal] = useState(0);
const {fetchCartItems}=useContext(Context);

// console.log(cartItems)

  // Function to handle quantity change
  // const handleQuantityChange = (id, newQuantity) => {
  //   if (newQuantity < 1) {
  //     // If quantity is less than 1, remove the item from the cart
  //     dispatch(removeFromCart(id));
  //   } else {
  //     // Otherwise, update the quantity
  //     dispatch(updateCartQuantity({ id, quantity: newQuantity }));
  //   }
  // };





 
    // Fetch cart items when the component mounts

    const fetchCartItems2 = async () => {
      try {
        const response = await axios.get(`https://dewisemattress.com/api/api4users/get_user_cart.php?user_id=${userId}`);
        if (response.data.success) {
          setCartItems(response.data.cart_items); // Set the cart items in state
          console.log(response.data)
          
        } else {
          setError('No items found in the cart.');
        }
      } catch (err) {
        setError('Failed to fetch cart items.');
        console.error(err);
      } finally {
        // setLoading(false); // Set loading to false once the request is complete
      }
    };


    useEffect(() => { 
    fetchCartItems2(); // Call the function to fetch data
    // Clean up the effect if needed (optional)
    return () => {
      // Any cleanup logic here if required
    };
  }, [userId]);




  // useEffect to recalculate the cart total whenever cartItems change
  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      return acc + parseFloat(item.subtotal); // Add the subtotal of each item to the total
    }, 0);

    setCartTotal(total); // Set the new total in the state
  }, [cartItems]);






  const increaseQuantity = async (productId, size) => {
    Swal.showLoading();
    try {
      console.log("Sending request with:", {
        user_id: userId,
        product_id: parseInt(productId),  // Ensure this is an integer
        size: size ? size : '',         // If no size, send null
      });
  
      // Send POST request to the backend API
      const response = await axios.post('https://dewisemattress.com/api/api4users/increase_quantity.php', {
        user_id: userId,                // Ensure it's an integer
        product_id: parseInt(productId), // Ensure it's an integer
        size: size ? size : null,       // Ensure size is a string or null
      });
  
      console.log('Backend response:', response.data);
  
      if (response.data.success) {
        // Action on success, like re-fetching the cart or updating state
        Swal.fire({
          icon: 'success',
          title: 'Quantity Updated!',
          text: 'The quantity of the product has been updated.',
        });
        fetchCartItems2();
        fetchCartItems();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: response.data.error,
        });
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while updating the quantity.',
      });
    } finally {
      Swal.close();
    }
  };
  
  



  const decreaseQuantity = async (productId, size) => {
    Swal.showLoading();
    try {
      const response = await axios.post('https://dewisemattress.com/api/api4users/decrease_quantity.php', {
        user_id: userId,
        product_id: parseInt(productId),
        size: size ? size : null,
      });
  
      console.log('Backend response:', response.data);
  
      if (response.data.success) {
        // First close loading immediately
        Swal.close();
  
        // ✅ Refresh the cart immediately
        await fetchCartItems2(); // VERY IMPORTANT: await it
        fetchCartItems();


        if (response.data.message=='0'){
          window.location.reload();
        }
  
        // Now show success alert AFTER refreshing
        // Swal.fire({
        //   icon: 'success',
        //   title: 'Success',
        //   text: response.data.message,
        //   timer: 1000,
        //   showConfirmButton: false,
        // });
      } else {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: response.data.error,
        });
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
      Swal.close();
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while updating the quantity.',
      });
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
                    <img src={`https://dewisemattress.com/api/uploads/${item.image}`} alt="cartItemImg" />
                    <div className='CartItemTextWrap'>
                      <p style={{ fontWeight: "bold",marginTop:"10px" }}>{item.product_name}</p>
                      <p style={{ marginTop: "10px" }}>
  <span>₦ {new Intl.NumberFormat().format(parseFloat(item.price))}</span>
</p>

                      {/* <p style={{fontSize:"0.7rem"}}>Product ID: {item.id}</p> */}
                    </div>
                  </div>
                  {/* <p className='UnitPrice' style={{marginTop:"10px"}}><strong style={{marginRight:"5px"}}>Unit Price: </strong>  ${item.price}</p> */}
                  <div className='CartItemQtyWrap'>
                    <p style={{ backgroundColor: "#000080",color:"white" }} onClick={()=>decreaseQuantity(item.product_id?item.product_id:item.id,item.size )}>-</p>
                    <p style={{ backgroundColor: "white" }}>{item.quantity}</p>
                    <p style={{ backgroundColor: "#000080", color:"white" }} onClick={()=>increaseQuantity(item.product_id,item.size )}>+</p>
                  </div>
                  <p className='SubTotal' style={{marginTop:"10px"}}><strong style={{marginRight:"5px"}}>Subtotal:</strong> ₦ {new Intl.NumberFormat().format(parseFloat(item?.subtotal).toFixed(2))}</p>
                  </div>
        
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='CartRight'>
        <button onClick={() => navigate("/")} className='ContinueShoppingButton'>Continue Shopping</button>

        {/* <div className='PromoCode'>
          <p>Have a Code?</p>
          <div className='PromoCodeInputWrap'>
            <input placeholder='Enter a code here' />
            <button>Apply</button>
          </div>
        </div> */}

        <div className='CartSummary'>
          <h3>Cart Summary</h3>
          {/* <div className='SubTotalWrap'>
            <p>Sub total ({totalQuantity} Items)</p>
            <p>${totalAmount.toFixed(2)}</p>
          </div> */}
          <div className='Line'></div>
          <div className='TotalWrap'>
            <p>Order Total:</p>
            <p style={{ color: "#000080" }}> ₦ {new Intl.NumberFormat().format(cartTotal.toFixed(2))}</p>
          </div>
          {cartItems.length>0&&<button
            onClick={() => navigate("/deliverydetailpage")}
            style={{ width: "90%", fontWeight: "bold", backgroundColor: "#000080", color: "white", fontSize: "1rem", margin: "0 auto" }}
          >
            Checkout
          </button>}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
