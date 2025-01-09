



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'; // Assuming you're using React Router for dynamic routes
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import SideCategoryMenu from './SideCategoryMenu';
// import "../CSS/ProductDetailPage.css";
// import { FaFlag, FaTicketAlt } from 'react-icons/fa';

// const ProductDetail = () => {
//   const { productId } = useParams(); // Get productId from the URL params
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [imageIndex,setImageIndex] = useState(0)

//   useEffect(() => {
//     const fetchProduct = async () => {
//       setLoading(true);
//       Swal.fire({
//         title: 'Loading...',
//         text: 'Fetching product details, please wait.',
//         allowOutsideClick: false,
//         didOpen: () => {
//           Swal.showLoading();
//         },
//       });

//       try {
//         const response = await axios.get(`https://www.glmarketplace.ng/api/get_product_by_id.php?productId=${productId}`);
//         if (response.data.success) {
//           setProduct(response.data.product);
//           Swal.close(); // Close the Swal loading
//           console.log(response.data)
//         } else {
//           Swal.fire('Error', response.data.error, 'error');
//         }
//       } catch (error) {
//         Swal.fire('Error', 'There was an error fetching the product.', 'error');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!product) {
//     return <div>Product not found.</div>;
//   }

//   return (
//     <div className='ProductDetailPageWrap'>
//       <SideCategoryMenu />
//       <div>
//         <div className='ProductDetailPage'>
//           {/* Product Images */}
//           <div className='ProductDetailPageLeft'>
//             {product.product_images.map((image, index) => (
//               <img key={index} src={`https://www.glmarketplace.ng/api/uploads/${image}`} alt={`Product image ${index}`}   onClick={()=>setImageIndex(index)} />
//             ))}
//           </div>

//           <div className='ProductDetailPageMid'>
//             <img src={`https://www.glmarketplace.ng/api/uploads/${product.product_images[imageIndex]}`} alt="Main Product" />
//           </div>

//           <div className='ProductDetailPageRight'>
//             {/* Product Information */}
//             <h2>{product.product_name}</h2>
//             <h4>Available Stock | {product.available_stock} - {product.available_stock<=0?"Out of stock":"In Stock"}</h4>



//             {/* Price and Add to Cart */}
//             <div className='QualityAndCartButton'>
//               <button>${product.price} | Add to cart</button>
//               <img src={require('../Images/Quality Badge2.png')} alt="quality Img" className='QualityBadge' />
//             </div>

//             {/* Guarantees */}
//             <div className='GuarranteeWrap'>
//               <p><FaTicketAlt style={{ color: "green" }} /> 1 Year 100% No-Risk Satisfaction Guarantee</p>
//               <p><FaFlag style={{ color: "red" }} /> Shipped from the USA</p>
//             </div>
//           </div>
//         </div>

//         {/* Additional USP image */}
//         <img src={require('../Images/DetaiPageUsp.png')} alt="uspImg" className='DetailPageUspImg' />
//         <h2 style={{textAlign:"center",color:"#003366"}}>Product Description</h2>
//         <p style={{textAlign:"center",padding:"2px"}}>{product.description}</p>
//       </div>
      
//     </div>
//   );
// }

// export default ProductDetail;

// //  {/* Quantity Selector */}
// //             {/* <div className='QuantityWrap'>
// //               <p>Quantity:</p>
// //               <div className='QuantityControl'>
// //                 <p style={{ borderRight: "1px solid lightGray", fontSize: "1.8rem", cursor: "pointer" }}>-</p>
// //                 <p>1</p>
// //                 <p style={{ borderLeft: "1px solid lightGray", fontSize: "1.8rem", cursor: "pointer" }}>+</p>
// //               </div>
// //             </div> */}




// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import SideCategoryMenu from './SideCategoryMenu';
// import "../CSS/ProductDetailPage.css";
// import { FaFlag, FaTicketAlt } from 'react-icons/fa';
// import { addToCart } from '../Features/Slice';  // Import the action

// const ProductDetail = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [imageIndex, setImageIndex] = useState(0);
//   const [quantity, setQuantity] = useState(1); // Track product quantity for cart
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       setLoading(true);
//       Swal.fire({
//         title: 'Loading...',
//         text: 'Fetching product details, please wait.',
//         allowOutsideClick: false,
//         didOpen: () => {
//           Swal.showLoading();
//         },
//       });

//       try {
//         const response = await axios.get(`https://www.glmarketplace.ng/api/get_product_by_id.php?productId=${productId}`);
//         if (response.data.success) {
//           setProduct(response.data.product);
//           Swal.close();
//         } else {
//           Swal.fire('Error', response.data.error, 'error');
//         }
//       } catch (error) {
//         Swal.fire('Error', 'There was an error fetching the product.', 'error');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   const handleAddToCart = () => {
//     const cartItem = {
//       id: product.id,
//       productName: product.product_name,
//       price: product.price,
//       quantity,
//       image: product.product_images[0],
//     };
//     dispatch(addToCart(cartItem));
//     Swal.fire('Success', 'Product added to cart', 'success');
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!product) {
//     return <div>Product not found.</div>;
//   }

//   return (
//     <div className='ProductDetailPageWrap'>
//       <div className='ProductDetailPageWrapA'>
//       <div className='ProductDetailPage'>
//         <div className='ProductDetailPageLeft'>
//           {product.product_images.map((image, index) => (
//             <img
//               key={index}
//               src={`https://www.glmarketplace.ng/api/uploads/${image}`}
//               alt={`Product image ${index}`}
//               onClick={() => setImageIndex(index)}
//             />
//           ))}
//         </div>

//         <div className='ProductDetailPageMid'>
//           <img src={`https://www.glmarketplace.ng/api/uploads/${product.product_images[imageIndex]}`} alt="Main Product" />
//         </div>

//         <div className='ProductDetailPageRight'>
//           <h2>{product.product_name}</h2>
//           <h4>Available Stock | {product.available_stock} - {product.available_stock <= 0 ? "Out of stock" : "In Stock"}</h4>

//           <div className='QualityAndCartButton'>
//             <button onClick={handleAddToCart}>${product.price} | Add to cart</button>
//             <img src={require('../Images/Quality Badge2.png')} alt="quality Img" className='QualityBadge' />
//           </div>

//           <div className='GuarranteeWrap'>
//             <p><FaTicketAlt style={{ color: "green" }} /> 1 Year 100% No-Risk Satisfaction Guarantee</p>
//             <p><FaFlag style={{ color: "red" }} /> Shipped from the USA</p>
//           </div>
//         </div>
//       </div>

//       <img src={require('../Images/DetaiPageUsp.png')} alt="uspImg" className='DetailPageUspImg' />
//       <h2 style={{ textAlign: "center", color: "#003366" }}>Product Description</h2>
//       <p style={{ textAlign: "center", padding: "2px",marginBottom:'100px' }}>{product.description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;










import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaBackward } from 'react-icons/fa6';
import "../CSS/ProductDetailPage.css";
import { addToCart } from '../Features/Slice';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1); // Track product quantity for cart
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      Swal.fire({
        title: 'Loading...',
        text: 'Fetching product details, please wait.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      try {
        const response = await axios.get(`https://www.glmarketplace.ng/api/get_product_by_id.php?productId=${productId}`);
        if (response.data.success) {
          setProduct(response.data.product);
          Swal.close();
        } else {
          Swal.fire('Error', response.data.error, 'error');
        }
      } catch (error) {
        Swal.fire('Error', 'There was an error fetching the product.', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      productName: product.product_name,
      price: product.price,
      quantity,
      image: product.product_images[0],
    };
    dispatch(addToCart(cartItem));
    Swal.fire('Success', 'Product added to cart', 'success');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className='ProductDetailWrap'>
      <div className="product-detail">
        <div className="image-gallery">
          <img
            src={`https://www.glmarketplace.ng/api/uploads/${product.product_images[imageIndex]}`}
            alt="Product"
            className="main-image"
          />
          <div className="thumbnail-images">
            {product.product_images.map((image, index) => (
              <img
                key={index}
                src={`https://www.glmarketplace.ng/api/uploads/${image}`}
                alt={`Thumbnail ${index}`}
                className={imageIndex === index ? "thumbnail-imageActive" : "thumbnail-image"}
                onClick={() => setImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="product-info">
          <h1>{product.product_name}</h1>
          <span>{product.description}</span>
          <p className="amount">₦ {new Intl.NumberFormat().format(product.price)}</p>
          <button className="buy-now" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className='BackButtonWrap'>
        <button onClick={() => window.history.back()}><FaBackward /> Back</button>
      </div>
    </div>
  );
};

export default ProductDetail;
