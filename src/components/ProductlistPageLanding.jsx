

import React, { useState, useEffect } from 'react';
import "../CSS/FeaturedCollections.css"; // Reuse BellyInn's CSS for consistency
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { addToCart } from '../Features/Slice';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import heroImg7 from '../Images/heroimg7.jpeg'

const ProductListPageLanding = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const category = location.state?.category || "All Product";

    useEffect(() => {
        const fetchProductsByCategory = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://www.glmarketplace.ng/api/get_products_by_category.php?category=${category}`
                );
                setProducts(response.data.products || []);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductsByCategory();
    }, [category]);

    const AddToCart = (id) => {
        const product = products.find((e) => e.id === id);
        const cartItem = {
            id: product.id,
            productName: product.product_name,
            price: product.price,
            quantity: 1, // Default quantity to 1 for simplicity
            image: product.product_images[0],
        };

        dispatch(addToCart(cartItem));
        Swal.fire('Success', 'Product added to cart', 'success');
    };

    if (loading) {
        return (
            <div style={{ width: "100%", height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                Loading...
            </div>
        );
    }

    return (
        <div className='FeaturedCollections'>
            <div className='FeaturedCollectionHeaderImgWrap' style={{ backgroundImage: `url(${heroImg7})` }}>
                <h1>{category==="All Product"?"FEATURED PRODUCTS":""}</h1>
            </div>
            <div className='Collections'>
                {products.length > 0 ? (
                    products.slice(0,10).map((product) => (
                        <Link
                            to={`/productdetail/${product.id}`}
                            className='ProductCard2'
                            key={product.id}
                        >
                            <div className='CardUp'>
                                <img
                                    src={`https://www.glmarketplace.ng/api/uploads/${product.product_images[0]}`}
                                    alt={product.product_name}
                                />
                            </div>
                            <div className='CardDown'>
                                <p>{product.product_name.slice(0, 13)}...</p>
                                <span>₦ {new Intl.NumberFormat().format(product.price)}</span>
                                {/* <button
                                    className='AddToCartButton'
                                    onClick={(e) => {
                                        e.preventDefault(); // Prevent Link navigation
                                        AddToCart(product.id);
                                    }}
                                    
                                >
                                    Add to cart
                                </button> */}
                            </div>
                        </Link>
                    ))
                ) : (
                    <div style={{ width: "100%", height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        No products found for this category.
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductListPageLanding;

