

// import { createSlice } from "@reduxjs/toolkit";

// const MySlice = createSlice({
//   name: "user",
//   initialState: {
//     adminInfo: null,
//     adminToken: null,
//   },
//   reducers: {
//     adminLogin: (state, { payload }) => {
//       state.adminInfo = payload.adminInfo;
//       state.adminToken = payload.adminToken;
//     },
//     adminLogout: (state) => {
//       state.adminInfo = null;
//       state.adminToken = null;
//     },
//     updateAdminInfo: (state, { payload }) => {
//       if (state.adminInfo) {
//         state.adminInfo = { ...state.adminInfo, ...payload };
//       }
//     },
//   },
// });

// export const { adminLogin, adminLogout, updateAdminInfo } = MySlice.actions;
// export default MySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const MySlice = createSlice({
  name: "user",
  initialState: {
    adminInfo: null,
    adminToken: null,
    cartItems: [], // Array of cart items
    totalQuantity: 0, // Total number of items in the cart
    totalAmount: 0, // Total price of items in the cart
  },
  reducers: {
    adminLogin: (state, { payload }) => {
      state.adminInfo = payload.adminInfo;
      state.adminToken = payload.adminToken;
    },
    adminLogout: (state) => {
      state.adminInfo = null;
      state.adminToken = null;
    },
    updateAdminInfo: (state, { payload }) => {
      if (state.adminInfo) {
        state.adminInfo = { ...state.adminInfo, ...payload };
      }
    },

    // Add to Cart
    addToCart: (state, { payload }) => {
      const existingItem = state.cartItems.find(item => item.id === payload.id);
      if (existingItem) {
        existingItem.quantity += payload.quantity;
        existingItem.subtotal = existingItem.price * existingItem.quantity;
      } else {
        state.cartItems.push({ ...payload, subtotal: payload.price * payload.quantity });
      }
      state.totalQuantity += payload.quantity;
      state.totalAmount += payload.price * payload.quantity;
    },

    // Update cart quantity
    updateCartQuantity: (state, { payload }) => {
      const item = state.cartItems.find(item => item.id === payload.id);
      if (item) {
        const oldSubtotal = item.subtotal;
        item.quantity = payload.quantity;
        item.subtotal = item.price * item.quantity;

        // Recalculate totals
        state.totalQuantity += payload.quantity - item.quantity; // Adjust totalQuantity
        state.totalAmount += item.subtotal - oldSubtotal; // Adjust totalAmount
      }
    },

    // Remove from cart
    removeFromCart: (state, { payload: id }) => {
      const item = state.cartItems.find(item => item.id === id);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.subtotal;
        state.cartItems = state.cartItems.filter(item => item.id !== id);
      }
    },
  },
});

export const { adminLogin, adminLogout, updateAdminInfo, addToCart, updateCartQuantity, removeFromCart } = MySlice.actions;
export default MySlice.reducer;
