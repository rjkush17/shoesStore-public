import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // reducer for add items in cart
    addCart: (state, action) => {
      const alreadyThere = state.find((item) => item._id == action.payload._id);
      if (alreadyThere) {
        alert("Item Already added in Cart");
      } else {
        state.push(action.payload);
      }
    },
    //reducer for clear cart
    clearCart: (state, action) => {
      return state = [];
    },
    //reducer for delete one item in cart
    deleteCart: (state, action) => {
      return (state = state.filter((item) => item._id !== action.payload));
    },
    //reducer for add increase quantity from item
    addQun: (state, action) => {
      let index = state.findIndex((item) => item._id == action.payload);
      if (index !== -1) {
        state[index].pcs = state[index].pcs + 1;
      }
    },
    //reducer for add decresing quantity from item
    minusQun: (state, action) => {
      const index = state.findIndex((item) => item._id === action.payload);

      if (index !== -1) {
        if (state[index].pcs > 1) {
          state[index].pcs -= 1;
        } else {
          state[index].pcs = 1;
        }
      } else {
        console.log("Item not found");
      }
    },
  },
});

export const { addCart, clearCart, deleteCart, addQun, minusQun } =
  cartSlice.actions;
export default cartSlice.reducer;
