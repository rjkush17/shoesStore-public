import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [{
    _id : "sdsdsdsdssdsds",
    title : "mens soers for offcie ",
    image : "https://res.cloudinary.com/dq8ybh10f/image/upload/v1709003069/ShoesListing/new1/pvbgel3fulelfjdmaykq.jpg",
    price : 339,
    pcs : 2
  },
{
  _id : "sdsdsdsdssdsds",
  title : "mens soers for offcie ",
  image : "https://res.cloudinary.com/dq8ybh10f/image/upload/v1709003072/ShoesListing/new1/witpr2ppetjdkerir1h3.jpg",
  price : 339,
  pcs : 2
}],
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
      state = [];
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
