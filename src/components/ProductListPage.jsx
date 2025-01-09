

// //   {/* <div className='QtyWrap'>
// //                 <p>Quantity:</p>
// //                 <input/>
// //                 </div> */}







// import React, { useState, useEffect } from 'react';
// import "../CSS/ProductListPage.css";
// import product1 from "../Images/product1.png"; // Placeholder for product images
// import SideCategoryMenu from './SideCategoryMenu';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { addToCart } from '../Features/Slice';
// import { useDispatch } from 'react-redux';
// import Swal from 'sweetalert2';

// const ProductListPage = () => {
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
//       {/* <SideCategoryMenu /> */}
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
//                 <img src={`https://www.glmarketplace.ng/api/uploads/${product.product_images[0]}`} 
//                 alt={product.productName} 
//                 onClick={() => navigate(`/productdetail/${product.id}`)}
//                 style={{cursor:"pointer"}}/>

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

// export default ProductListPage;





import React, { useState, useEffect } from 'react';
import "../CSS/FeaturedCollections.css"; // Reuse BellyInn's CSS for consistency
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { addToCart } from '../Features/Slice';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import heroImg7 from '../Images/heroimg7.jpeg'

const ProductListPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    // const category = location.state?.category || "All Products";
    const {category}=useParams();

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
                <h1>{category.toUpperCase()}</h1>
            </div>
            <div className='Collections'>
                {products.length > 0 ? (
                    products.map((product) => (
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

export default ProductListPage;

