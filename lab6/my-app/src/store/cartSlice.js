// import {} from "react-redux";
import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            const newQuantity = newItem.quantity;
            
            if (existingItem) {
                existingItem.quantity += newQuantity;
                state.totalPrice += existingItem.price * newQuantity;
            } else {
                state.items.push({...newItem,quantity: newQuantity});
                state.totalPrice += newItem.price * newQuantity;
            };
            state.totalQuantity += newQuantity;
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                state.items = state.items.filter(item => item.id !== id);
                state.totalQuantity -= existingItem.quantity;
            }
        },
        editQuantity(state, action) {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                state.totalQuantity += quantity - existingItem.quantity;
                existingItem.quantity = quantity;
            }
        }
    }
});

export const { addItemToCart, removeItemFromCart, editQuantity } = cartSlice.actions;
export default cartSlice.reducer;