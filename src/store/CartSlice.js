import { createSlice } from "@reduxjs/toolkit";

// const storedItems = localStorage.getItem("cartItems");
const initialState = {
  // cartItems: storedItems ? JSON.parse(storedItems) : [],
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        state.cartItems.push({
          ...newItem,
          // quantity: 1,
          // totalPrice: newItem.price,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += newItem.price;
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      // console.log(id.id,'data from payload')
      // console.log(state.cartItems,"filtering data")
      const itemToRemove = state.cartItems.find((item) => item.id === id.id);
      // console.log(initialState.cartItems,"on remove of data from redux")
      console.log(itemToRemove,"data to be removed")
      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.totalPrice -= itemToRemove.totalPrice;
        state.cartItems = state.cartItems.filter((item) => item.id !== id.id);
        // console.log(state.cartItems,"on remove of data from redux")
      }
      //  console.log(state.cartItems,"data in redux after delete")
      // state.cartItems = state.cartItems.filter(Items => Items.id !== action.payload.id);

      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    updateQuantity:(state,action)=>{
      const {id,quantity} = action.payload;
      const itemToUpdate = state.cartItems.find(Item => Item.id === id);

      if(itemToUpdate){
        itemToUpdate.quantity = quantity;
        // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    }
  },
});

export const { addToCart, removeFromCart ,updateQuantity } = cartSlice.actions;//men.women,kids,cart 
export const cartReducer = cartSlice.reducer;//store


