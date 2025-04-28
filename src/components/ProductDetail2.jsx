

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { FaBackward } from 'react-icons/fa6';
import "../CSS/ProductDetailPage.css";
import { addToCart } from '../Features/Slice';
import { Context } from './Context';

const ProductDetail2 = () => {
  const { productId } = useParams(); // Get the productId from URL
  const [product, setProduct] = useState(null); // Store the selected product
  const [loading, setLoading] = useState(true); // Loading state
  const [imageIndex, setImageIndex] = useState(0); // To switch product images
  const [quantity, setQuantity] = useState(1); // To track quantity for cart
  const [selectedSize, setSelectedSize] = useState(null); // Selected size from dropdown
  const [selectedPrice, setSelectedPrice] = useState(null); // Price based on selected size
  const [size,setSize]=useState('')
  const userInfo = useSelector(state =>state.userInfo);
  const navigate = useNavigate();

  const dispatch = useDispatch(); // To dispatch actions
  const { featuredProducts } = useContext(Context); // Context holding featured products

  // Fetch product details based on productId
  useEffect(() => {
    const selectedProduct = featuredProducts.find(p => p.id === Number(productId));
    if (selectedProduct) {
      setProduct(selectedProduct);
      setSelectedSize(selectedProduct.featuredFoam[0]?.size); // Default to first size
      setSelectedPrice(selectedProduct.featuredFoam[0]?.price); // Default to first price
    }
    setLoading(false);
  }, [productId, featuredProducts]);

  // Loading state
  if (loading) {
    return <p>Loading product...</p>;
  }

  // Product not found state
  if (!product) {
    return <p>Product not found.</p>;
  }

  // Handle size change from dropdown
  const handleSizeChange = (event) => {
    const selectedSize = event.target.value;
    setSelectedSize(selectedSize);

    const selectedFoam = product.featuredFoam.find(foam => foam.size === selectedSize);
    if (selectedFoam) {
      setSelectedPrice(selectedFoam.price); // Update the price based on selected size
    }
  };



  // Handle adding product to cart front end
  // const handleAddToCart = () => {
  //   const cartItem = {
  //     id: product.id,
  //     productName: `${product.name} ${selectedSize}`,
  //     price: selectedPrice,
  //     quantity,
  //     image: product.images[0],
  //   };
  //   dispatch(addToCart(cartItem));
  //   Swal.fire('Success', 'Product added to cart', 'success');
  // };



  const handleAddToCart = async () => {
if(userInfo===null){
  Swal.fire({text:"Please login to proceed"}).then((result)=>{if(result.isConfirmed){navigate('/userlogin')}});
  return;
}

    Swal.fire({text:"Adding to cart..."});
    Swal.showLoading();
    try {
      const response = await fetch('https://dewisemattress.com/api/api4users/add_to_cart.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userInfo.id, // 🔥 TODO: Replace with actual logged-in user id
          product_id: product.id,
          product_name: `${product.name} ${selectedSize}`,
          size:selectedSize,
          price: selectedPrice,
          image: product.images[0],
        }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        Swal.fire('Success', 'Product added to cart', 'success');
      } else {
        Swal.fire('Error', data.error || 'Something went wrong', 'error');
      }
    } catch (error) {
      Swal.fire('Error', error.message || 'Network error', 'error');
    }
  };
  

  return (
    <div className='ProductDetailWrap'>
      <div className="product-detail">
        {/* Image Gallery */}
        <div className="image-gallery">
          <img
            src={`https://dewisemattress.com/api/uploads/${product.images[imageIndex]}`}
            alt="Product"
            className="main-image"
          />
          <div className="thumbnail-images">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={`https://dewisemattress.com/api/uploads/${image}`}
                alt={`Thumbnail ${index}`}
                className={imageIndex === index ? "thumbnail-imageActive" : "thumbnail-image"}
                onClick={() => setImageIndex(index)} // Change image when clicking thumbnail
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className='amount'>{selectedSize}</p>
          {/* Display the selected price */}
          <p className="amount">₦ {new Intl.NumberFormat().format(selectedPrice)}</p>
          
          <span>Choose your perfect size</span>

          {/* Dropdown for size selection */}
          <select 
            value={selectedSize} 
            onChange={handleSizeChange} 
            className="size-dropdown"
            style={{padding:"10px", cursor:"pointer", marginBottom:"30px", outline:"none"}}
          >
            {product.featuredFoam.map((item, index) => (
              <option key={index} value={item.size} >
                {item.size} - ₦ {item.price.toLocaleString()}
              </option>
            ))}
          </select>

         
          {/* Add to Cart Button */}
          <button className="buy-now" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Back Button */}
      <div className='BackButtonWrap'>
        <button onClick={() => window.history.back()}><FaBackward /> Back</button>
      </div>
    </div>
  );
};

export default ProductDetail2;



// import React, { useState, useEffect, useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import Swal from 'sweetalert2';
// import { FaBackward } from 'react-icons/fa6';
// import "../CSS/ProductDetailPage.css";
// import { addToCart } from '../Features/Slice';
// import { Context } from './Context';

// const ProductDetail2 = () => {
//   const { productId } = useParams(); // Get the productId from URL
//   const [product, setProduct] = useState(null); // Store the selected product
//   const [loading, setLoading] = useState(true); // Loading state
//   const [imageIndex, setImageIndex] = useState(0); // To switch product images
//   const [quantity, setQuantity] = useState(1); // To track quantity for cart
//   const [selectedSize, setSelectedSize] = useState(null); // Selected size from dropdown
//   const [selectedPrice, setSelectedPrice] = useState(null); // Price based on selected size

//   const dispatch = useDispatch(); // To dispatch actions
//   const { featuredProducts } = useContext(Context); // Context holding featured products
//   const cartItems = useSelector((state) => state.cart); // Cart items from the Redux store

//   // Fetch product details based on productId
//   useEffect(() => {
//     const selectedProduct = featuredProducts.find(p => p.id === Number(productId));
//     if (selectedProduct) {
//       setProduct(selectedProduct);
//       setSelectedSize(selectedProduct.featuredFoam[0]?.size); // Default to first size
//       setSelectedPrice(selectedProduct.featuredFoam[0]?.price); // Default to first price
//     }
//     setLoading(false);
//   }, [productId, featuredProducts]);

//   // Loading state
//   if (loading) {
//     return <p>Loading product...</p>;
//   }

//   // Product not found state
//   if (!product) {
//     return <p>Product not found.</p>;
//   }

//   // Handle size change from dropdown
//   const handleSizeChange = (event) => {
//     const selectedSize = event.target.value;
//     setSelectedSize(selectedSize);

//     const selectedFoam = product.featuredFoam.find(foam => foam.size === selectedSize);
//     if (selectedFoam) {
//       setSelectedPrice(selectedFoam.price); // Update the price based on selected size
//     }
//   };

//   // Check if the product with the selected size already exists in the cart
//   const isProductInCart = () => {
//     return cartItems.some(
//       (item) => item.id === product.id && item.size === selectedSize
//     );
//   };

//   // Handle adding product to cart
//   const handleAddToCart = () => {
//     if (isProductInCart()) {
//       Swal.fire('Info', 'You already added this product with the selected size to the cart.', 'info');
//     } else {
//       const cartItem = {
//         id: product.id,
//         productName: product.name,
//         price: selectedPrice,
//         quantity,
//         image: product.images[0],
//         size: selectedSize, // Include the selected size to differentiate the items
//       };
//       dispatch(addToCart(cartItem)); // Dispatch action to add to cart
//       Swal.fire('Success', 'Product added to cart', 'success');
//     }
//   };

//   return (
//     <div className='ProductDetailWrap'>
//       {product&&<div className="product-detail">
//         {/* Image Gallery */}
//         <div className="image-gallery">
//           <img
//             src={product.images[imageIndex]}
//             alt="Product"
//             className="main-image"
//           />
//           <div className="thumbnail-images">
//             {product.images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Thumbnail ${index}`}
//                 className={imageIndex === index ? "thumbnail-imageActive" : "thumbnail-image"}
//                 onClick={() => setImageIndex(index)} // Change image when clicking thumbnail
//               />
//             ))}
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="product-info">
//           <h1>{product.name}</h1>
//           <span>Choose your perfect size</span>

//           {/* Dropdown for size selection */}
//           <select 
//             value={selectedSize} 
//             onChange={handleSizeChange} 
//             className="size-dropdown"
//           >
//             {product.featuredFoam.map((item, index) => (
//               <option key={index} value={item?.size}>
//                 {item?.size} - ₦ {item?.price.toLocaleString()}
//               </option>
//             ))}
//           </select>

//           {/* Display the selected price */}
//           <p className="amount">Selected Size Price: ₦ {new Intl.NumberFormat().format(selectedPrice)}</p>
          
//           {/* Add to Cart Button */}
//           <button className="buy-now" onClick={handleAddToCart}>
//             Add to Cart
//           </button>
//         </div>
//       </div>}

//       {/* Back Button */}
//       <div className='BackButtonWrap'>
//         <button onClick={() => window.history.back()}><FaBackward /> Back</button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail2;

