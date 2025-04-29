

import React, { useContext,useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../Features/Slice';
import { Context } from './Context';
import Swal from "sweetalert2";
import PaystackPop from "@paystack/inline-js";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import axios from 'axios';

import '../CSS/OrderSummaryPage.css';

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

const OrderSummaryPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector(state=>state.userInfo.id)
  const {fetchCartItems, setTotalQty}=useContext(Context);

  const userInfo = useSelector(state => state.userInfo);
  const user = useSelector(state => state.DeliveryDetail);
  // const cart = useSelector(state => state.cartItems);
  const [cart, setCart]=useState([]);
  console.log(cart);



   // Fetch cart items when the component mounts

   const fetchCartItems2 = async () => {
    try {
      const response = await axios.get(`https://dewisemattress.com/api/api4users/get_user_cart.php?user_id=${userId}`);
      if (response.data.success) {
        setCart(response.data.cart_items); // Set the cart items in state
        console.log(response.data)
        
      } else {
        // setError('No items found in the cart.');
      }
    } catch (err) {
      // setError('Failed to fetch cart items.');
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





  const {
    setAdminMenu,
    orderSendEmailUrl
  } = useContext(Context);

  const [isChecked, setIsChecked] = useState(false);

  const email = user.email;
  const amount = calculateTotal();
  const firstname = user.firstName;
  const lastname = user.lastName;

  function calculateTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  function generateOrderRef() {
    return 'ORD-' + Date.now() + '-' + Math.floor(Math.random() * 10000);
  }

  function getCurrentDateTime() {
    const now = new Date();
    const offset = now.getTimezoneOffset() * 60000;
    return new Date(now.getTime() - offset).toISOString().slice(0, 19).replace("T", " ");
  }


  
  async function createOrder(reference) {
    const loadingAlert = Swal.fire({ text: "Processing your order..." });
    Swal.showLoading();

    const orderSummary = {
      userId: userInfo.id,
      date: getCurrentDateTime(),
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
        imageUrl: `https://dewisemattress.com/api/uploads/${item.image}`,
        productName: item.product_name,
        quantity: item.quantity,
        price: item.price,
        productId: item.product_id
      })),
      total: calculateTotal()
    };

    try {
      const response = await axios.post('https://dewisemattress.com/api/api4users/create_order.php', orderSummary);

      if (response.data.success) {
        
        Swal.fire({
          icon: 'success',
          title: 'Order Placed Successfully!',
          text: 'You will receive an email with the order details.',
          allowOutsideClick: false,
        }).then(result => {
          if (result.isConfirmed) {
            // navigate('/userdashboard');
            // setAdminMenu(1);
          }
        });

        clearCart(userInfo.id);

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Order Failed',
          text: response.data.error || 'An error occurred while processing your order.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while processing your order. Please try again later.',
      });
    } finally {
      loadingAlert.close();
    }
  }

  function payWithPaystack() {
    const paystack = new PaystackPop();

    paystack.newTransaction({
      // key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
      key: "pk_live_951c991a9d895dd08017bf11d39c944e6617bd86",
      amount: amount * 100,
      email,
      firstname,
      lastname,
      onSuccess: (transaction) => {
        Swal.fire({ icon: "success", text: "Payment successful!", timer: 2000 });
        createOrder(transaction.reference);
      },
      onCancel: () => {
        Swal.fire({ icon: "error", text: "Payment cancelled." });
      },
      onError: (error) => {
        Swal.fire({ icon: "error", text: `Payment failed: ${error.message}` });
      },
    });
  }

  const flutterwaveConfig = {
    public_key: "FLWPUBK_TEST-3f4052d4a8b6e027b460756652b193df-X",
    tx_ref: generateOrderRef(),
    amount,
    currency: 'USD',
    payment_options: 'card,banktransfer',
    customer: { email, name: `${firstname} ${lastname}` },
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
          createOrder(response.transaction_id);
        }
        closePaymentModal();
      },
      onClose: () => Swal.fire({ icon: "error", text: "Payment cancelled." }),
    });
  };






  // clear cart
  const clearCart = async (userId) => {
    try {
      Swal.showLoading();
  
      const response = await axios.post('https://dewisemattress.com/api/api4users/delete_cart_items.php', {
        user_id: userId
      });
  
      console.log('Clear cart response:', response.data);
  
      if (response.data.success) {
        // Swal.fire({
        //   icon: 'success',
        //   title: 'Cart Cleared',
        //   text: response.data.message,
        // });
        // Optionally refresh cart data
        setTotalQty(0);
        navigate('/userdashboard');
        setAdminMenu(1);
        
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: response.data.error || 'Failed to clear cart.',
        });
      }
    } catch (error) {
      console.error('Error clearing cart:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while clearing the cart.',
      });
    } finally {
      Swal.close();
    }
  };




  return (
    <div className="order-summary">
      <h2>Order Summary</h2>

      <div className="user-info">
        <h3>Delivery Information</h3>
        {["firstName", "lastName", "phone", "email", "address", "state", "city"].map(key => (
          <p key={key}><strong>{key.replace(/([A-Z])/g, ' $1')}: </strong>{user[key]}</p>
        ))}
      </div>

      <div className="cart-info">
        <h3>Cart Items</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={`https://dewisemattress.com/api/uploads/${item.image}`} alt="summaryImage" />
              <p>{item.product_name} - {item.quantity} x ₦ {new Intl.NumberFormat().format(item.price)}</p>
              {/* <p style={{ fontSize: "0.7rem" }}>Product ID: {item.product_id}</p> */}
            </li>
          ))}
        </ul>
      </div>

      <div className="total-info">
        <h3>Total</h3>
        <p><strong>Subtotal:</strong> ₦ {new Intl.NumberFormat().format(amount)}</p>
        <p><strong>Grand Total:</strong> ₦ {new Intl.NumberFormat().format(amount)}</p>
      </div>

      <button type="button" onClick={payWithPaystack}>Pay Now</button>
    </div>
  );
};

export default OrderSummaryPage;

