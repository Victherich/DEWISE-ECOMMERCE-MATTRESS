// import axios from 'axios';
// import React, { useState } from 'react';
// import Swal from 'sweetalert2';
// import styled from 'styled-components';

// const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
// const VALID_IMAGE_TYPES = ['image/jpeg', 'image/png'];

// const subCategories = [
//     { id: 1, name: 'Calcium Supplements' },
//     { id: 2, name: 'Alpha Lipoic Acid' },
//     { id: 3, name: 'Cinnamon Supplements' },
//     { id: 4, name: 'CoQ-10' },
//     { id: 5, name: 'Flaxseed Products' },
//     { id: 6, name: 'Ginkgo Biloba' },
//     { id: 7, name: 'L-Carnitine' },
//     { id: 8, name: 'Omega-3' },
//     { id: 9, name: 'Homeopathic' },
//     { id: 10, name: 'Eye Products' }
// ];

// function UploadProduct({ setCurrentView }) {
//   const [productData, setProductData] = useState({
//     productName: '',
//     description: '',
//     price: '',
//     availableStock: '',
//     category: '', // Changed to category
//     productImages: []
//   });

//   const [previewImages, setPreviewImages] = useState([]);

//   const handleInputChange = (e) => {
//     setProductData({
//       ...productData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
    
//     if (productData.productImages.length + selectedFiles.length > 4) {
//       Swal.fire('Error', 'You cannot upload more than 4 images', 'error');
//       return;
//     }

//     const invalidFiles = selectedFiles.filter(file => 
//       file.size > MAX_FILE_SIZE || !VALID_IMAGE_TYPES.includes(file.type)
//     );

//     if (invalidFiles.length > 0) {
//       const invalidFileNames = invalidFiles.map(file => file.name).join(', ');
//       Swal.fire('Error', `Invalid file types or sizes detected: ${invalidFileNames}`, 'error');
//       return;
//     }

//     const newImages = selectedFiles.map((file) => URL.createObjectURL(file));
//     setPreviewImages((prev) => [...prev, ...newImages]);
//     setProductData((prev) => ({
//       ...prev,
//       productImages: [...prev.productImages, ...selectedFiles],
//     }));
//   };

//   const handleRemoveImage = (indexToRemove) => {
//     setPreviewImages((prev) => prev.filter((_, index) => index !== indexToRemove));
//     setProductData((prev) => ({
//       ...prev,
//       productImages: prev.productImages.filter((_, index) => index !== indexToRemove),
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('productName', productData.productName);
//     formData.append('description', productData.description);
//     formData.append('price', productData.price);
//     formData.append('availableStock', productData.availableStock);
//     formData.append('category', productData.category); // Send category to backend
//     productData.productImages.forEach((image) => formData.append('productImages[]', image));

//     try {
//       Swal.fire({
//         title: 'Uploading...',
//         text: 'Please wait',
//         allowOutsideClick: false,
//         didOpen: () => {
//           Swal.showLoading();
//         },
//       });

//       const response = await axios.post('https://www.heovin.com.ng/api/upload_product.php', formData);
//       if (response.data.success) {
//         Swal.fire('Success', response.data.message, 'success');
//         setCurrentView('storeinfo'); 

//       } else {
//         Swal.fire('Error', response.data.error, 'error');
//       }
//     } catch (error) {
//       Swal.fire('Error', 'There was an error uploading the product.', 'error');
//     }
//   };

//   return (
//     <UploadFormWrap>
//       <h2 style={{textAlign:"center",color:"#003366"}}>Upload Product</h2>
//       <UploadForm onSubmit={handleSubmit}>
//         <Input type="text" name="productName" placeholder="Product Name" onChange={handleInputChange} />
//         <Input type="text" name="description" placeholder="Description" onChange={handleInputChange} />
//         <Input type="number" name="price" placeholder="Price" onChange={handleInputChange} />
//         <Input type="number" name="availableStock" placeholder="Available Stock" onChange={handleInputChange} />
//         <Select name="category" onChange={handleInputChange}>
//           <option value="">--Select Category--</option>
//           {subCategories.map((category) => (
//             <option key={category.id} value={category.name}>
//               {category.name}
//             </option>
//           ))}
//         </Select>
//         <ImageUploadContainer>
//           <input
//             type="file"
//             name="productImages"
//             multiple
//             accept="image/jpeg,image/png"
//             onChange={handleFileChange}
//           />
//         </ImageUploadContainer>
//         <PreviewImagesContainer>
//           {previewImages.map((image, index) => (
//             <div key={index}>
//               <img src={image} alt="preview" />
//               <button type="button" onClick={() => handleRemoveImage(index)}>
//                 Remove
//               </button>
//             </div>
//           ))}
//         </PreviewImagesContainer>
//         <SubmitButton type="submit">Upload Product</SubmitButton>
//       </UploadForm>
//     </UploadFormWrap>
//   );
// }

// export default UploadProduct;

// // Add styled-components here as per your need (e.g., UploadFormWrap, Input, etc.)


// const UploadFormWrap = styled.div`
//   width:100%;
//   background-color:rgba(255,255,255,0.7);
//   padding:10px;
// `;

// const UploadForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
//   padding-top:20px;
  
//   width:70%;
//   margin:0 auto;

//   @media(max-width:884px){
//     width:100%;
//   }
// `;

// const Input = styled.input`
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Select = styled.select`
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const SubmitButton = styled.button`
//   background-color: #003366;
//   color: white;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   margin-bottom:50px;
// `;

// const ImagePreviewContainer = styled.div`
//   display: flex;
//   gap: 10px;
//   margin-top: 20px;
// `;

// const PreviewWrapper = styled.div`
//   position: relative;
//   display: inline-block;
// `;

// const PreviewImage = styled.img`
//   width: 100px;
//   height: 100px;
//   object-fit: cover;
//   border-radius: 5px;
//   border: 1px solid #ccc;
// `;

// const RemoveButton = styled.button`
//   position: absolute;
//   top: 0;
//   right: 0;
//   background-color: red;
//   color: white;
//   border: none;
//   border-radius: 50%;
//   width: 20px;
//   height: 20px;
//   cursor: pointer;
//   font-size: 12px;
// `;

// const ImageUploadContainer = styled.div`

// `

// const PreviewImagesContainer = styled.div`

// `



import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styled from 'styled-components';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
const VALID_IMAGE_TYPES = ['image/jpeg', 'image/png'];

// const subCategories = [
//     { id: 1, name: 'Calcium Supplements' },
//     { id: 2, name: 'Alpha Lipoic Acid' },
//     { id: 3, name: 'Cinnamon Supplements' },
//     { id: 4, name: 'CoQ-10' },
//     { id: 5, name: 'Flaxseed Products' },
//     { id: 6, name: 'Ginkgo Biloba' },
//     { id: 8, name: 'Omega-3' },
// ];



const subCategories = [
  { id: 14, name: 'PipingRock\'s Best' },
  { id: 15, name: 'Sale Items' },
  { id: 16, name: 'Essential Oils' },
  { id: 17, name: 'Men\'s Vitamins' },
  { id: 18, name: 'Melatonin' },
  { id: 19, name: 'CoQ-10' },
  { id: 20, name: 'Ashwagandha' },
  { id: 21, name: 'Weight Support' },
  { id: 22, name: 'Skin Care' },
  { id: 23, name: 'Immune Support' },
  { id: 24, name: 'Supplements' },
  { id: 25, name: 'Probiotics' },
  { id: 26, name: 'Fragrance Oils' },
  { id: 27, name: 'Mushrooms' },
  { id: 28, name: 'Joint Support' },
  { id: 29, name: 'Women\'s Vitamins' },
  { id: 30, name: 'Sports & Fitness' },
  { id: 31, name: 'Beauty & Personal Care' },
  { id: 32, name: 'Bulk Herbs' },
  { id: 33, name: 'Pet Products' },
  { id: 34, name: 'Liquid Extracts' },
  { id: 35, name: 'Herbal Supplements' },
  { id: 36, name: 'Vitamin D' },
  { id: 37, name: 'Turmeric' },
  { id: 38, name: 'Spices' },
  { id: 39, name: 'Magnesium' },
  { id: 40, name: 'Homeopathics' },
  { id: 41, name: 'Collagen' },
  { id: 42, name: 'Aromatherapy' },
  { id: 43, name: 'Lutein' },
  { id: 44, name: 'Vitamin C' },
  { id: 45, name: 'Zinc' },
  { id: 46, name: 'Nuts & Seeds' },
  { id: 47, name: 'Hyaluronic Acid' },
  { id: 48, name: 'Elderberry' },
  { id: 49, name: 'Compare and Save' },
  { id: 50, name: 'N-Acetyl Cysteine' },
  { id: 51, name: 'Organic Products' },
  { id: 52, name: 'Herbal Teas' },
  { id: 53, name: 'Antioxidants' },
  { id: 54, name: 'Brain Supplements' },
  { id: 55, name: 'Digestive Health' },
  { id: 56, name: 'Eye Nutrients' },
  { id: 57, name: 'Heart Health' },
  { id: 58, name: 'Herbs' },
  { id: 59, name: 'Immune Support 2' },
  { id: 60, name: 'Sleep Support' },
  { id: 61, name: 'Crazy Deals' },
  { id: 62, name: 'Vitamins' },
  { id: 63, name: 'Beauty' },
  { id: 64, name: 'Sports' },
  {id:65, name:'All Brands'},
  {id:66, name:'All Category'}
];


function UploadProduct({setAdminMenu}) {
  const [productData, setProductData] = useState({
    productName: '',
    description: '',
    price: '',
    availableStock: '',
    category: '',
    productImages: []
  });

  const [previewImages, setPreviewImages] = useState([]);

  const handleInputChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    if (productData.productImages.length + selectedFiles.length > 4) {
      Swal.fire('Error', 'You cannot upload more than 4 images', 'error');
      return;
    }

    const invalidFiles = selectedFiles.filter(file => 
      file.size > MAX_FILE_SIZE || !VALID_IMAGE_TYPES.includes(file.type)
    );

    if (invalidFiles.length > 0) {
      const invalidFileNames = invalidFiles.map(file => file.name).join(', ');
      Swal.fire('Error', `Invalid file types or sizes detected: ${invalidFileNames}`, 'error');
      return;
    }

    const newImages = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviewImages((prev) => [...prev, ...newImages]);
    setProductData((prev) => ({
      ...prev,
      productImages: [...prev.productImages, ...selectedFiles],
    }));
  };

  const handleRemoveImage = (indexToRemove) => {
    setPreviewImages((prev) => prev.filter((_, index) => index !== indexToRemove));
    setProductData((prev) => ({
      ...prev,
      productImages: prev.productImages.filter((_, index) => index !== indexToRemove),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('productName', productData.productName);
    formData.append('description', productData.description);
    formData.append('price', productData.price);
    formData.append('availableStock', productData.availableStock);
    formData.append('category', productData.category);
    productData.productImages.forEach((image) => formData.append('productImages[]', image));
  
    try {
      Swal.fire({
        title: 'Uploading...',
        text: 'Please wait',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
  
      const response = await axios.post('https://www.heovin.com.ng/api/upload_product.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      // Logging the entire response for debugging
      console.log(response.data);
  
      if (response.data.success) {
        Swal.fire('Success', response.data.message, 'success');
               setAdminMenu(0)
      } else {
        // Improved error handling to log the error response
        console.error('Error Response:', response.data);
        Swal.fire('Error', response.data.error, 'error');
      }
    } catch (error) {
      console.error('Error during submission:', error);
      Swal.fire('Error', 'There was an error uploading the product.', 'error');
    }
  };
  

  return (
    <UploadFormWrap>
      <h2 style={{textAlign:"center",color:"#003366"}}>Upload Product</h2>
      <UploadForm onSubmit={handleSubmit}>
        <Input type="text" name="productName" placeholder="Product Name" onChange={handleInputChange} />
        <Input type="text" name="description" placeholder="Description" onChange={handleInputChange} />
        <Input type="number" name="price" placeholder="Price" onChange={handleInputChange} />
        <Input type="number" name="availableStock" placeholder="Available Stock" onChange={handleInputChange} />
        <Select name="category" onChange={handleInputChange}>
          <option value="">--Select Category--</option>
          {subCategories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </Select>
        <ImageUploadContainer>
          <input
            type="file"
            name="productImages"
            multiple
            accept="image/jpeg,image/png"
            onChange={handleFileChange}
          />
        </ImageUploadContainer>
        <PreviewImagesContainer>
          {previewImages.map((image, index) => (
            <ImageWrap key={index}>
              <Image src={image} alt="preview" />
              <Button3 type="button" onClick={() => handleRemoveImage(index)}>
                Remove
              </Button3>
            </ImageWrap>
          ))}
        </PreviewImagesContainer>
        <SubmitButton type="submit">Upload Product</SubmitButton>
      </UploadForm>
    </UploadFormWrap>
  );
}

export default UploadProduct;

// Add styled-components for layout
const UploadFormWrap = styled.div`
  width: 100%;
  background-color: rgba(255,255,255,0.7);
  padding: 10px;
`;

const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 20px;
  width: 70%;
  margin: 0 auto;

  @media (max-width: 884px) {
    width: 100%;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #003366;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 50px;
`;

const ImageUploadContainer = styled.div``;

const PreviewImagesContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;



const ImageWrap = styled.div`
  width:70px;
  display:flex;
  flex-direction:column;
  height:80px;
  background-color:red;
`

const Image = styled.img`
  width:100%;
  height:100%;
`

const Button3 = styled.button`
  cursor:pointer;
`