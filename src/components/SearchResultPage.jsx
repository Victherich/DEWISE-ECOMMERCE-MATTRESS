

// // //   {/* <div className='QtyWrap'>
// // //                 <p>Quantity:</p>
// // //                 <input/>
// // //                 </div> */}



// import React, { useState, useEffect } from 'react';
// import "../CSS/ProductListPage.css";
// import product1 from "../Images/product1.png"; // Placeholder for product images
// import SideCategoryMenu from './SideCategoryMenu';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { addToCart } from '../Features/Slice';
// import { useDispatch } from 'react-redux';
// import Swal from 'sweetalert2';

// const SearchResultPage = () => {
//     const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const category = location.state?.category || "All Product"; // Default to "All Products" if no category is provided
//   const [quantity, setQuantity] = useState(1); // Track product quantity for cart

//   useEffect(() => {
//     // Fetch products based on the selected category
//     const fetchProductsByCategory = async () => {
//       setLoading(true);
//       try {
//         // Example API call to get products by category
//         const response = await axios.get(`https://www.glmarketplace.ng/api/get_products_by_category.php?category=${category}`);
//         setProducts(response.data.products || []); // Assuming API returns products array
//         console.log(response.data.products)
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProductsByCategory();
//   }, [category]);

//   if (loading) {
//     return <div style={{width:"100%",height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}}>Loading...</div>;
//   }


//   const AddToCart = (id)=>{
//     const product = products.find((e)=>e.id===id)
//     const cartItem = {
//         id: product.id,
//         productName: product.product_name,
//         price: product.price,
//         quantity,
//         image: product.product_images[0],
//       };

//     dispatch(addToCart(cartItem));
//     Swal.fire('Success', 'Product added to cart', 'success');

//   }

//   return (
//     <div className='ProductListPageWrapA'>
//       <SideCategoryMenu />
//       <div className='ProductListPageWrap'>
//         <div className='ProductListPageTitleWrap'>
//           <p className='ProductListPageTitle'>{category}</p>
//         </div>
//         <div className='ProductSortContainer'>  
//           <p>Sort by: </p><input type="text" />
//         </div>
//         <div className='ProductCards'>
//           {products.length > 0 ? (
//             products.map(product => (
//               <div className='ProductCard' key={product.id}>
//                 <img src={`https://www.glmarketplace.ng/api/uploads/${product.product_images[0]}`} alt={product.productName} />
//                 <div className='ProductTextWrap'>
//                   <p onClick={() => navigate(`/productdetail/${product.id}`)}>
//                     {product.product_name}
//                   </p>
//                   <span>${product.price}</span>
//                   <div className='ButtonAndQtyWrap'>
//                     <button onClick={()=>AddToCart(product.id)}>Add to cart</button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div style={{width:"100%",height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}}>No products found for this category.</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchResultPage;



import React, { useContext, useState, useEffect } from 'react';
import "../CSS/ProductListPage.css";
import SideCategoryMenu from './SideCategoryMenu';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../Features/Slice';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { Context } from './Context';

const SearchResultPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { searchArray } = useContext(Context); // Access the search results from context
    const [products, setProducts] = useState(searchArray || []); // Initialize products with searchArray
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(1); // Track product quantity for cart

    useEffect(() => {
        // Update products when searchArray changes
        setProducts(searchArray);
    }, [searchArray]);

    const AddToCart = (id) => {
        const product = products.find((e) => e.id === id);
        if (product) {
            const cartItem = {
                id: product.id,
                productName: product.product_name,
                price: product.price,
                quantity,
                image: product.product_images[0],
            };

            dispatch(addToCart(cartItem));
            Swal.fire('Success', 'Product added to cart', 'success');
        }
    };

    if (loading) {
        return <div style={{ width: "100%", height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>Loading...</div>;
    }

    return (
        <div className='ProductListPageWrapA'>
            <SideCategoryMenu />
            <div className='ProductListPageWrap'>
                <div className='ProductListPageTitleWrap' style={{display:"flex"}}>
                    <p className='ProductListPageTitle'>Search Results</p>
                    <p className='ProductListPageTitle'>{products.length} Results</p>
                </div>
                <div className='ProductCards'>
                    {products.length > 0 ? (
                        products.map(product => (
                            <div className='ProductCard' key={product.id}>
                                <img 
                                src={`https://www.glmarketplace.ng/api/uploads/${product.product_images[0]}`} 
                                alt={product.product_name} 
                                onClick={() => navigate(`/productdetail/${product.id}`)}
                                />

                                <div className='ProductTextWrap'>
                                    <p onClick={() => navigate(`/productdetail/${product.id}`)}>
                                        {product.product_name}
                                    </p>
                                    <span>${product.price}</span>
                                    <div className='ButtonAndQtyWrap'>
                                        {/* <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} /> */}
                                        <button onClick={() => AddToCart(product.id)}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div style={{ width: "100%", height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>No products found for this search.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchResultPage;

