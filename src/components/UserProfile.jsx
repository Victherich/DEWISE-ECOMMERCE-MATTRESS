
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../CSS/AdminProfile.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { userLogin, updateUserInfo } from '../Features/Slice';



const UserProfile = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const [editModal, setEditModal] = useState(false);
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingAlert = Swal.fire({title:"Updating phone number..."})
    Swal.showLoading()
    try {
      const response = await axios.post('https://www.glmarketplace.ng/api/api4users/user_update_phone.php', {
        email: userInfo.email, // Assuming email is stored in adminInfo
        phoneNumber: phone
      });

      if (response.data.success) {
        // Dispatch action to update Redux state
        dispatch(updateUserInfo({ phone_number: response.data.user.phone_number }));

        Swal.fire({
          icon: 'success',
          title: 'Update Successful',
          text: 'Phone number updated successfully.',
          confirmButtonText: 'OK'
        });
        setPhone(''); // Clear input field
        setEditModal(false); // Close the modal
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: response.data.error,
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.error('Error updating phone number:', error);
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: 'An error occurred. Please try again.',
        confirmButtonText: 'OK'
      });
    }finally{
      loadingAlert.close()
    }
  };

  return (
    <div className="admin-profile-page">
      <h2>User Information</h2>
      <p><strong style={{color:"#FF550C"}}>Name:</strong> {userInfo.full_name}</p>
      <p><strong style={{color:"#FF550C"}}>Email:</strong> {userInfo.email}</p>
      <p><strong style={{color:"#FF550C"}}>Phone:</strong> {userInfo.phone_number}</p>
      <button onClick={() => setEditModal(!editModal)}>Edit Phone number</button>
      {editModal && (
        <div className='admin-profile-edit-modal'>
          <form onSubmit={handleSubmit}>
            <input 
              placeholder='New Phone Number' 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required
            />
            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

