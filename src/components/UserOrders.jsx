import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/UserOrders.css'; // Import custom styles
import { useSelector } from 'react-redux';
import { Context } from './Context';

const UserOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId = useSelector(state => state.userInfo.id);
const {fetchCartItems}=useContext(Context);


useEffect(()=>{
fetchCartItems();
},[])


  
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`https://dewisemattress.com/api/api4users/get_user_orders.php?userId=${userId}`);

                console.log(response.data); // Debugging line
                if (response.data.success) {
                    setOrders(response.data.orders);
                } else {
                    setError(response.data.error || 'Failed to fetch orders');
                }
            } catch (err) {
                console.error(err); // Log error for debugging
                setError('Error fetching orders: ' + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="orders-container">
            <h2 style={{color:"#000080"}}>Your Orders</h2>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <div className="orders-list">
                    {orders.map(order => (
                        <div key={order.order_ref} className="order-card">
                            <h3 style={{color:"#000080"}}>Order Ref: {order.order_ref}</h3>
                            <p>Transaction Ref: {order.transaction_ref}</p>
                            <p>Date: {new Date(order.order_date).toLocaleString()}</p>
                            <p>Total: ₦ {new Intl.NumberFormat().format(order.total)}</p>
                            {/* <p>Delivery Charge: ₦{order.delivery_charge}</p> */}
                            <div className="order-items">
                                {order.items.map(item => (
                                    <div key={item.product_id} className="order-item">
                                        <img src={item.image_url} alt={item.product_name} />
                                        <div className="item-details">
                                            <p>{item.product_name}</p>
                                            <p>Quantity: {item.quantity}</p>
                                            <p>Price: ₦ {new Intl.NumberFormat().format(item.price)}</p>
                                            <p style={{fontSize:"10px"}}>Product ID: {item.product_id}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserOrders;
