

// //   {/* <div className='QtyWrap'>
// //                 <p>Quantity:</p>
// //                 <input/>
// //                 </div> */}



import React, { useState, useEffect } from 'react';
import "../CSS/ProductListPage.css";
import product1 from "../Images/product1.png"; // Placeholder for product images
import SideCategoryMenu from './SideCategoryMenu';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const ProductListPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const category = location.state?.category || "allproduct"; // Default to "All Products" if no category is provided

  useEffect(() => {
    // Fetch products based on the selected category
    const fetchProductsByCategory = async () => {
      setLoading(true);
      try {
        // Example API call to get products by category
        const response = await axios.get(`https://www.heovin.com.ng/api/get_products_by_category.php?category=${category}`);
        setProducts(response.data.products || []); // Assuming API returns products array
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='ProductListPageWrapA'>
      <SideCategoryMenu />
      <div className='ProductListPageWrap'>
        <div className='ProductListPageTitleWrap'>
          <p className='ProductListPageTitle'>{category}</p>
        </div>
        <div className='ProductSortContainer'>
          <p>Sort by: </p><input type="text" />
        </div>
        <div className='ProductCards'>
          {products.length > 0 ? (
            products.map(product => (
              <div className='ProductCard' key={product.id}>
                <img src={product.imageUrl || product1} alt={product.productName} />
                <div className='ProductTextWrap'>
                  <p onClick={() => navigate(`/productdetail/${product.id}`)}>
                    {product.productName}
                  </p>
                  <span>${product.price}</span>
                  <div className='ButtonAndQtyWrap'>
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No products found for this category.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
