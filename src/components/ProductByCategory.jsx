// import React, { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';

// // Sample categories - adjust according to your actual categories
// const categories = [
//   'Calcium Supplements',
//   'Alpha Lipoic Acid',
//   'Cinnamon Supplements',
//   'CoQ-10',
//   'Flaxseed Products',
//   'Ginkgo Biloba',
//   'L-Carnitine',
//   'Omega-3',
//   'Homeopathic',
//   'Eye Products',
// ];

// function ProductByCategory() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   const fetchProductsByCategory = async (category) => {
//     setLoading(true);
//     Swal.fire({
//       title: 'Loading...',
//       text: 'Fetching products, please wait.',
//       allowOutsideClick: false,
//       didOpen: () => {
//         Swal.showLoading();
//       },
//     });

//     try {
//       const response = await axios.get(`https://www.heovin.com.ng/api/get_products_by_category.php?category=${category}`);
      
//       if (response.data.success) {
//         setProducts(response.data.products);
//         Swal.fire('Success', 'Products fetched successfully!', 'success');
//       } else {
//         Swal.fire('Error', response.data.error, 'error');
//       }
//     } catch (error) {
//       Swal.fire('Error', 'There was an error fetching products.', 'error');
//     } finally {
//       setLoading(false);
//       Swal.close(); // Close the Swal loading
//     }
//   };

//   const handleCategoryChange = (event) => {
//     const category = event.target.value;
//     setSelectedCategory(category);
//     fetchProductsByCategory(category);
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredProducts = products.filter((product) =>
//     product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <Container>
//       <h2 style={{color:"#CB6B37", marginBottom:"5px"}}>Select a Category</h2>
//       <SelectCategory onChange={handleCategoryChange} value={selectedCategory}>
//         <option value="">-- Choose a category --</option>
//         {categories.map((category, index) => (
//           <option key={index} value={category}>
//             {category}
//           </option>
//         ))}
//       </SelectCategory>

//       {selectedCategory && (
//         <>
//           <SearchInput
//             type="text"
//             placeholder="Search for products..."
//             value={searchQuery}
//             onChange={handleSearchChange}
//           />
//         </>
//       )}
      
//       {loading ? (
//         <p>Loading products...</p>
//       ) : (
//         <ProductList>
//           {filteredProducts.length===0?"No product in the selected category":filteredProducts.map((product, index) => (
//             <ProductCard key={index} onClick={()=>navigate(`/productdetail/${product.id}`)}>
//               <h3 style={{color:"#CB6B37"}}>{product.product_name}</h3>
//               {/* <p>{product.description}</p> */}
//               <p>Price: ${product.price}</p>
//               <img src={`https://www.heovin.com.ng/api/uploads/${product.product_images[0]}`} alt={product.product_name} />
//             </ProductCard>
//           ))}
//         </ProductList>
//       )}
//     </Container>
//   );
// }

// export default ProductByCategory;

// // Styled Components
// const Container = styled.div`
//   padding: 20px;
  
// `;

// const SelectCategory = styled.select`
//   padding: 10px;
//   margin-bottom: 20px;
//   border-radius: 5px;
//   border: 1px solid #ccc;
//   width: 100%;
//   max-width: 300px; // Adjust the width as needed
//   font-size: 16px;
// `;

// const SearchInput = styled.input`
//   padding: 10px;
//   margin-top: 10px;
//   margin-bottom: 20px;
//   border-radius: 5px;
//   border: 1px solid #ccc;
//   width: 100%;
//   max-width: 300px; // Adjust the width as needed
//   font-size: 16px;
// `;

// const ProductList = styled.div`
//   margin-top: 20px;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
// `;

// const ProductCard = styled.div`
//   border: 1px solid #ccc;
//   padding: 15px;
//   border-radius: 5px;
//   width: 200px;
//   cursor: pointer;

//   img {
//     width: 100%;
//     height: auto;
//   }
// `;



import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Sample categories - adjust according to your actual categories
const categories = [
  'Calcium Supplements',
  'Alpha Lipoic Acid',
  'Cinnamon Supplements',
  'CoQ-10',
  'Flaxseed Products',
  'Ginkgo Biloba',
  'L-Carnitine',
  'Omega-3',
  'Homeopathic',
  'Eye Products',
];

function ProductByCategory() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const fetchProductsByCategory = async (category) => {
    setLoading(true);
    Swal.fire({
      title: 'Loading...',
      text: 'Fetching products, please wait.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await axios.get(`https://www.heovin.com.ng/api/get_products_by_category.php?category=${category}`);
      
      if (response.data.success) {
        setProducts(response.data.products);
        Swal.fire('Success', 'Products fetched successfully!', 'success');
      } else {
        Swal.fire('Error', response.data.error, 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'There was an error fetching products.', 'error');
    } finally {
      setLoading(false);
      Swal.close(); // Close the Swal loading
    }
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    fetchProductsByCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

//   const handleDeleteProduct = async (productId) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'Do you want to delete this product?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'No, keep it',
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           const response = await axios.post('https://www.heovin.com.ng/api/delete_product.php', { productId });
//           if (response.data.success) {
//             setProducts(products.filter(product => product.id !== productId));
//             Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
//           } else {
//             Swal.fire('Error', response.data.error, 'error');
//           }
//         } catch (error) {
//           Swal.fire('Error', 'There was an error deleting the product.', 'error');
//         }
//       }
//     });
//   };


const handleDeleteProduct = async (productId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this product?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({text:"Deleting..."})
        try {
          const response = await axios.post('https://www.heovin.com.ng/api/delete_product.php', 
            { productId }, // Data being sent
            {
              headers: {
                'Content-Type': 'application/json', // Ensure Content-Type is JSON
              }
            }
          );
          if (response.data.success) {
            setProducts(products.filter(product => product.id !== productId));
            Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
          } else {
            Swal.fire('Error', response.data.error, 'error');
          }
        } catch (error) {
          Swal.fire('Error', 'There was an error deleting the product.', 'error');
        }
      }
    });
  };
  


  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <h2 style={{ color: "#CB6B37", marginBottom: "5px" }}>Select a Category</h2>
      <SelectCategory onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">-- Choose a category --</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </SelectCategory>

      {selectedCategory && (
        <>
          <SearchInput
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </>
      )}

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <ProductList>
          {filteredProducts.length === 0 ? "No products in the selected category" : filteredProducts.map((product, index) => (
            <ProductCard key={index}>
              <h3 style={{ color: "#CB6B37" }}>{product.product_name}</h3>
              <p>Price: ${product.price}</p>
              <img
                src={`https://www.heovin.com.ng/api/uploads/${product.product_images[0]}`}
                alt={product.product_name}
              />
              <ActionButtons>
                <DeleteButton style={{backgroundColor:"#003366"}} onClick={() => navigate(`/productdetail/${product.id}`)}>View</DeleteButton>
                <DeleteButton onClick={() => handleDeleteProduct(product.id)}>Delete</DeleteButton>
              </ActionButtons>
            </ProductCard>
          ))}
        </ProductList>
      )}
    </Container>
  );
}

export default ProductByCategory;

// Styled Components
const Container = styled.div`
  padding: 20px;
`;

const SelectCategory = styled.select`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 300px;
  font-size: 16px;
`;

const SearchInput = styled.input`
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 300px;
  font-size: 16px;
`;

const ProductList = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
  width: 200px;

  img {
    width: 100%;
    height: auto;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e60000;
  }
`;
