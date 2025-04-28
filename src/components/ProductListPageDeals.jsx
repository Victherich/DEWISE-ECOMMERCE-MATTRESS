

import React, { useState, useEffect } from 'react';
import "../CSS/FeaturedCollections.css"; // Reuse BellyInn's CSS for consistency
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { addToCart } from '../Features/Slice';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import heroImg7 from '../Images/heroimg7.jpeg'

const ProductListPageDeals = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    // const category = location.state?.category || "All Product";

    const category = 'All Product'

    useEffect(() => {
        const fetchMixedCategoryProducts = async () => {
            setLoading(true);
            try {
                // Fetch all products (regardless of category)
                const response = await axios.get(
                    `https://dewisemattress.com/api/get_products_by_category.php?category=${category}` // Assuming this gives all products
                );
    
                const allProducts = response.data.products || [];
    
                // Create a Map to store only one product per category
                const categoryMap = new Map();
    
                // Loop through the products and filter by unique categories
                for (const product of allProducts) {
                    // If the category isn't already in the Map, add the product to the Map
                    if (!categoryMap.has(product.category)) {
                        categoryMap.set(product.category, product);
                    }
    
                    // Stop once we have 10 unique category products
                    if (categoryMap.size >= 10) break;
                }
    
                // Convert the Map back to an array
                const uniqueCategoryProducts = Array.from(categoryMap.values());
    
                setProducts(uniqueCategoryProducts); // Set the filtered products to state
            } catch (error) {
                console.error("Error fetching mixed category products:", error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchMixedCategoryProducts();
    }, []);
    


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
                <h1>CRAZY DEALS</h1>
            </div>
            <div className='Collections'>
    {products.length > 0 ? (
        [...products] // Create a shallow copy of the array
            .reverse() // Reverse the copied array
            .slice(0, 10) // Slice the first 10 items
            .map((product) => (
                <Link
                    to={`/productdetail/${product.id}`}
                    className='ProductCard2'
                    key={product.id}
                >
                    <div className='CardUp'>
                        <img
                            src={`https://dewisemattress.com/api/uploads/${product.product_images[0]}`}
                            alt={product.product_name}
                        />
                    </div>
                    <div className='CardDown'>
                        <p>{product.product_name.slice(0, 13)}...</p>
                        <span>₦ {new Intl.NumberFormat().format(product.price)}</span>
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

export default ProductListPageDeals;

