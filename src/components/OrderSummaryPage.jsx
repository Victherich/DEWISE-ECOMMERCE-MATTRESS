import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../CSS/OrderSummaryPage.css';
import { Context } from './Context';
import Swal from "sweetalert2"
import { useDispatch } from 'react-redux';
import PaystackPop from "@paystack/inline-js"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { clearCart } from '../Features/Slice';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';



const deliveryFees = {
    Abia: { Umuahia: 100, Aba: 100, Ohafia: 100, Arochukwu: 100 },
    Adamawa: { Yola: 100, Mubi: 100, Jimeta: 100, Numan: 100 },
    AkwaIbom: { Uyo: 100, Eket: 100, "Ikot Ekpene": 100, Oron: 100 },
    Anambra: { Awka: 100, Onitsha: 100, Nnewi: 100, Ekwulobia: 100 },
    Bauchi: { Bauchi: 100, Azare: 100, Misau: 100, "Jama'are": 100 },
    Bayelsa: { Yenagoa: 100, Ogbia: 100, Sagbama: 100, Brass: 100 },
    Benue: { Makurdi: 100, Gboko: 100, Otukpo: 100, "Katsina-Ala": 100 },
    Borno: { Maiduguri: 100, Biu: 100, Bama: 100, Chibok: 100 },
    CrossRiver: { Calabar: 100, Ikom: 100, Obudu: 100, Ugep: 100 },
    Delta: { Asaba: 100, Warri: 100, Sapele: 100, Ughelli: 100 },
    Ebonyi: { Abakaliki: 100, Afikpo: 100, Onueke: 100, Ezza: 100 },
    Edo: { "Benin City": 100, Ekpoma: 100, Auchi: 100, Uromi: 100 },
    Ekiti: { "Ado-Ekiti": 100, "Ikere-Ekiti": 100, Iworoko: 100, "Omuo-Ekiti": 100 },
    Enugu: { Enugu: 100, Nsukka: 100, Agbani: 100, Awgu: 100 },
    Gombe: { Gombe: 100, Kaltungo: 100, Bajoga: 100, Dukku: 100 },
    Imo: { Owerri: 100, Orlu: 100, Okigwe: 100, Mbaise: 100 },
    Jigawa: { Dutse: 100, Hadejia: 100, Kazaure: 100, Gumel: 100 },
    Kaduna: { Kaduna: 100, Zaria: 100, Kafanchan: 100, Kagoro: 100 },
    Kano: { Kano: 100, Wudil: 100, Gwarzo: 100, Rano: 100 },
    Katsina: { Katsina: 100, Funtua: 100, Daura: 100, Malumfashi: 100 },
    Kebbi: { "Birnin Kebbi": 100, Argungu: 100, Yauri: 100, Zuru: 100 },
    Kogi: { Lokoja: 100, Okene: 100, Idah: 100, Kabba: 100 },
    Kwara: { Ilorin: 100, Offa: 100, "Omu-Aran": 100, Jebba: 100 },
    Lagos: { Ikeja: 100, "Lagos Island": 100, Epe: 100, Badagry: 100 },
    Nasarawa: { Lafia: 100, Keffi: 100, Akwanga: 100, Karu: 100 },
    Niger: { Minna: 100, Suleja: 100, Kontagora: 100, Bida: 100 },
    Ogun: { Abeokuta: 100, "Ijebu-Ode": 100, Sagamu: 100, Ota: 100 },
    Ondo: { Akure: 100, "Ondo City": 100, Owo: 100, Ikare: 100 },
    Osun: { Osogbo: 100, "Ile-Ife": 100, Ilesa: 100, Ede: 100 },
    Oyo: { Ibadan: 100, "Oyo Town": 100, Ogbomosho: 100, Iseyin: 100 },
    Plateau: { Jos: 100, "Barkin Ladi": 100, Pankshin: 100, Shendam: 100 },
    Rivers: { "Port Harcourt": 100, Bonny: 100, Ahoada: 100, Omoku: 100 },
    Sokoto: { Sokoto: 100, Wurno: 100, Illela: 100, Tambuwal: 100 },
    Taraba: { Jalingo: 100, Wukari: 100, Bali: 100, Takum: 100 },
    Yobe: { Damaturu: 100, Potiskum: 100, Nguru: 100, Gashua: 100 },
    Zamfara: { Gusau: 100, "Kaura Namoda": 100, "Talata Mafara": 100, Zaria: 100 },
    FCT: { Abuja: 100, Gwagwalada: 100, Kuje: 100, Bwari: 100 }
  };
  
  // console.log(deliveryFees);
    

const OrderSummaryPage = () => {



  const navigate = useNavigate()
    const dispatch = useDispatch()
    const userInfo = useSelector(state=>state.userInfo)
  const user = useSelector((state) => state.DeliveryDetail);
  const cart = useSelector((state) => state.cartItems);
  
  const {loading,setLoading,loading2,setLoading2,dashContent,setDashContent,userAllOrders,setUserAllOrders,
    orderedList,setOrderedList,orderListPostUrl,orderSendEmailUrl
  }=useContext(Context)
  const {setAdminMenu}=useContext(Context)

  console.log(userInfo)
  console.log(cart)

  const calculateTotal = () => {
    let total = cart.reduce((sum, item) => sum + item.price  * item.quantity, 0);
    const deliveryFee = deliveryFees[user.state]?.[user.city] || 0;
    return total + deliveryFee;
  };

  

  
  const createOrder = async (orderSummary) => {
    const loadingAlert = Swal.fire({ text: "Processing your order..." });
    Swal.showLoading();
    
    try {
      // Show a loading alert
      
  
      // Make a POST request to the backend
      const response = await axios.post('https://www.heovin.com.ng/api/api4users/create_order.php', orderSummary);
      
      
      Swal.fire({
        icon: 'success',
        title: 'Order Placed Successfully!',
        text: 'Your order has been confirmed. You will receive an email with the order details.',
        allowOutsideClick:false,
    }).then((result) => {
        if (result.isConfirmed) {
            navigate('/userdashboard');
            setAdminMenu(1)
        }
    });     

      // Handle success response
      if (response.data.success) {
        
        
        // Clear the cart in Redux
        dispatch(clearCart());
  
        // Navigate back to homepage or order confirmation page
        
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Order Failed',
          text: response.data.error || 'An error occurred while processing your order.',
        });
      }
    } catch (error) {
      console.error('Error creating order:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while processing your order. Please try again later.',
      });
    } finally {
      // Close the loading alert
    //   Swal.close();
    loadingAlert.close();
    }
  };
  



  const generateOrderRef = () => {
    return 'ORD-' + Date.now() + '-' + Math.floor(Math.random() * 10000);
  };

  const [isChecked,setIsChecked]=useState(false)
  const email = user.email;
  const amount= calculateTotal();
  const firstname=user.firstName
  const lastname= user.lastName

  const deliveryCharge = new Intl.NumberFormat().format(deliveryFees[user.state]?.[user.city] || 0)


const handleOrderNow2 = async (reference) => {
    const getCurrentDateTime = () => {
      const now = new Date();
      const offset = now.getTimezoneOffset() * 60000;
      const localTime = new Date(now.getTime() - offset);
      return localTime.toISOString().slice(0, 19).replace("T", " ");
    };
  
    const orderSummary = {
      userId: userInfo.id,
      date: getCurrentDateTime(),
      deliveryCharge: Number(deliveryCharge.replace(/,/g, '')), // unformatted delivery charge
      transactionRef: reference,
      orderRef: generateOrderRef(),
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      email: user.email,
      address: user.address,
      state: user.state,
      city: user.city,
      cartItems: cart.map(item => ({
        imageUrl: `https://www.heovin.com.ng/api/uploads/${item.image}`,
        productName: item.productName,
        quantity: item.quantity,
        price: item.price, // raw price, without formatting
        productId:item.id,
      })),
      total: calculateTotal() // unformatted total amount
    };
  
    console.log(orderSummary);
    createOrder(orderSummary);
  
    try {
      const response = await axios.post(`${orderSendEmailUrl}`, {
        buyerEmail: user.email,
        sellerEmail: 'heovincom@heovin.com.ng',
        orderSummary: JSON.stringify(orderSummary, null, 2)
      });
  
      if (response.status === 200) {
        // Swal.fire({ icon: "success", text: "Order confirmed, Please check your email for details" });
      } else {
        // Swal.fire({ icon: "error", text: "Failed to send order summary." });
      }
    } catch (error) {
      console.error(error);
    //   Swal.fire({ icon: "error", text: "An error occurred while sending the order summary." });
    }
  };
  




  const handleOrderNow = () => {
    // handleLoading();
    if (isChecked) {
    //   handleOrderNow3()
    } else {
      payWithPaystack();
    }
  };

 



  // const payWithPaystack = () => {
  //   const paystack = new PaystackPop();
  //   paystack.newTransaction({
  //     key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
  //     amount: amount * 100,
  //     email: email,
  //     firstname: firstname,
  //     lastname: lastname,
  //     onSuccess: (transaction) => {

  //       Swal.fire({ icon: "success", text: "Payment successful!", showConfirmButton: true,timer:2000 });
  
  //       handleOrderNow2(transaction.reference)
        
  //     },
  //     onCancel: () => {
  //       // handle payment cancellation
  //       Swal.fire({ icon: "error", text: "Payment cancelled.", showConfirmButton: true });
  //     },
  //     onError: (error) => {
  //       // handle payment errors
  //       Swal.fire({ icon: "error", text: `Payment failed: ${error.message}`, showConfirmButton: true });
  //     }
  //   });
  // };


  const payWithPaystack = () => {
    // Assuming exchangeRate is the USD to NGN conversion rate
    const exchangeRate = 1600; // Example rate, make sure to get the actual rate dynamically
    const amountInNGN = (amount * exchangeRate).toFixed(2); // Calculate NGN equivalent
  
    Swal.fire({
      title: 'Confirm Payment',
      text: `You are about to pay $${amount} USD, which is approximately ₦${amountInNGN} NGN. Do you want to proceed?`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, proceed',
      cancelButtonText: 'No, cancel',
      allowOutsideClick:false,
    }).then((result) => {
      if (result.isConfirmed) {
        // If user confirms, proceed with Paystack payment
        const paystack = new PaystackPop();
        paystack.newTransaction({
          key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
          amount: amountInNGN * 100, // Amount in kobo
          email: email,
          firstname: firstname,
          lastname: lastname,
          onSuccess: (transaction) => {
            Swal.fire({ icon: "success", text: "Payment successful!", showConfirmButton: true, timer: 2000 });
            handleOrderNow2(transaction.reference);
          },
          onCancel: () => {
            Swal.fire({ icon: "error", text: "Payment cancelled.", showConfirmButton: true });
          },
          onError: (error) => {
            Swal.fire({ icon: "error", text: `Payment failed: ${error.message}`, showConfirmButton: true });
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({ icon: 'error', text: 'Payment cancelled.', showConfirmButton: true });
      }
    });
  };
  

const [currencyOption,setCurrencyOption]=useState("")




// const payWithFlutterWave = () => {
//   const config = {
//     public_key: "FLWPUBK_TEST-3f4052d4a8b6e027b460756652b193df-X",
//     tx_ref: generateOrderRef(),
//     amount: amount, 
//     currency: 'USD',
//     payment_options: 'card,banktransfer',
//     customer: {
//       email: email,
//       name: `${firstname} ${lastname}`,
//     },
//     customizations: {
//       title: 'Heovin.com',
//       description: 'Payment for items in cart',
//     },
//     callback: (data) => {
//       if (data.status === "successful") {
//         Swal.fire({ icon: "success", text: "Payment successful!" });
//         handleOrderNow2(data.transaction_id);
//       } else {
//         Swal.fire({ icon: "error", text: "Payment failed, try again!" });
//       }
//       closePaymentModal(); // close modal programmatically
//     },
//     onClose: () => {
//       Swal.fire({ icon: "error", text: "Payment cancelled!" });
//     }
//   };

//   const handleFlutterPayment = useFlutterwave(config);
//   handleFlutterPayment({
//     callback: (response) => {
//       if (response.status === "successful") {
//         Swal.fire({ icon: "success", text: "Payment successful!" });
//         handleOrderNow2(response.transaction_id);
//       }
//       closePaymentModal(); 
//     },
//     onClose: () => Swal.fire({ icon: "error", text: "Payment cancelled." }),
//   });
// };

 // Move the useFlutterwave hook into the component
 
 
 
 const flutterwaveConfig = {
  public_key: "FLWPUBK_TEST-3f4052d4a8b6e027b460756652b193df-X",
  tx_ref: generateOrderRef(),
  amount: amount,
  currency: 'USD',
  payment_options: 'card,banktransfer',
  customer: {
    email: email,
    name: `${firstname} ${lastname}`,
  },
  customizations: {
    title: 'Heovin.com',
    description: 'Payment for items in cart',
  },
};

const handleFlutterPayment = useFlutterwave(flutterwaveConfig);

const payWithFlutterWave = () => {
  handleFlutterPayment({
    callback: (response) => {
      if (response.status === "successful") {
        Swal.fire({ icon: "success", text: "Payment successful!" });
        handleOrderNow2(response.transaction_id);
      }
      closePaymentModal();
    },
    onClose: () => Swal.fire({ icon: "error", text: "Payment cancelled." }),
  });
};


  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <div className="user-info">
        <h3>Delivery Information</h3>
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Last Name:</strong> {user.lastName}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>State:</strong> {user.state}</p>
        <p><strong>City:</strong> {user.city}</p>
      </div>
      <div className="cart-info">
        <h3>Cart Items</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
                <img src={`https://www.heovin.com.ng/api/uploads/${item.image}`} alt="summaryImage"/>
              <p>{item.productName} - {item.quantity} x $ {new Intl.NumberFormat().format(item.price)}</p>
              <p style={{fontSize:"0.7rem"}}>Product ID: {item.id}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="total-info">
        <h3>Total</h3>
        <p><strong>Subtotal:</strong> $ {new Intl.NumberFormat().format(cart.reduce((sum, item) => sum + item.price * item.quantity, 0))}</p>
        <p><strong>Delivery Fee:</strong> $ {new Intl.NumberFormat().format(deliveryFees[user.state]?.[user.city] || 0)}</p>
        <p><strong>Grand Total:</strong> ${new Intl.NumberFormat().format(calculateTotal())}</p>
      </div>
      {/* <div className='CheckBoxWrap'><input type="checkbox" isChecked={isChecked} onClick={()=>setIsChecked(!isChecked)}/> <p>Payment on delivery</p></div>       */}
{/* {isChecked?<button onClick={handleOrderNow}>Order Now</button> */}




<select className='OrderSummaryPageSelect' onChange={(e)=>setCurrencyOption(e.target.value)}>
  <option >--Select Currency in which you want to pay and click "pay now"--</option>
  <option value="naira">Naira</option>
  <option value="usd">USD</option>
</select>

{currencyOption==="naira"&&<button type="button" onClick={payWithPaystack}>Pay Now</button>}
{currencyOption==="usd"&&<button type="button" onClick={payWithFlutterWave}>Pay Now</button>}
    
    </div>

  );
};

export default OrderSummaryPage;



