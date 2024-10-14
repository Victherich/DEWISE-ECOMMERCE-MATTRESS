import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../CSS/AdminSearchProduct.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const AdminSearchProduct = () => {
    const [searchNameInput, setSearchNameInput] = useState("");
    const [searchIdInput, setSearchIdInput] = useState("");
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    // Search by product name
    const handleSearchByName = async () => {
        if (searchNameInput.trim() === "") {
            Swal.fire("Error", "Please enter a product name", "error");
            return;
        }
        const LoadingAlert = Swal.fire({ text: "Searching by name..." });
        Swal.showLoading();

        try {
            const response = await axios.get(`https://www.heovin.com.ng/api/get_products_by_name.php?searchTerm=${searchNameInput}`);
            setProducts(response.data.products);
            Swal.close();
        } catch (error) {
            Swal.fire("Error", "Failed to fetch products by name", "error");
            console.error(error);
        }
    };

    // Search by product ID
    const handleSearchById = async () => {
        if (searchIdInput.trim() === "") {
            Swal.fire("Error", "Please enter a product ID", "error");
            return;
        }
        const LoadingAlert = Swal.fire({ text: "Searching by ID..." });
        Swal.showLoading();

        try {
            const response = await axios.get(`https://www.heovin.com.ng/api/get_product_by_id.php?productId=${searchIdInput}`);
            if(response.data.product){
                setProducts([response.data.product]);
            }
            Swal.close();
        } catch (error) {
            Swal.fire("Error", "Failed to fetch product by ID", "error");
            console.error(error);
        }
    };


    

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
  

    return (
        <div className="searchProduct-container">
            <div className="searchProduct-box">
                <h2>Search Products</h2>

                <div className="searchProduct-inputGroup">
                    <input
                        type="text"
                        placeholder="Search by product name"
                        value={searchNameInput}
                        onChange={(e) => setSearchNameInput(e.target.value)}
                    />
                    <button onClick={handleSearchByName}>Search by Name</button>
                </div>

                <div className="searchProduct-inputGroup">
                    <input
                        type="text"
                        placeholder="Search by product ID"
                        value={searchIdInput}
                        onChange={(e) => setSearchIdInput(e.target.value)}
                    />
                    <button onClick={handleSearchById}>Search by ID</button>
                </div>
            </div>

            <div className="searchProduct-list">
                {products && products.length > 0 ? (
                    products?.map(product => (
                        <div className="searchProduct-card" key={product.id}>
                            <img
                                src={`https://www.heovin.com.ng/api/uploads/${product.product_images[0]}`}
                                alt={product.product_name}
                            />
                            <div className="searchProduct-info">
                                <h3>{product.product_name}</h3>
                                <p>Price: ${product.price}</p>
                                <p style={{fontSize:"small"}}>Product ID: {product.id}</p>
                            </div>
                            <ActionButtons>

                <DeleteButton style={{backgroundColor:"#003366"}} onClick={() => navigate(`/productdetail/${product.id}`)}>View</DeleteButton>
                <DeleteButton onClick={() => handleDeleteProduct(product.id)}>Delete</DeleteButton>
              </ActionButtons>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
};

export default AdminSearchProduct;


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
