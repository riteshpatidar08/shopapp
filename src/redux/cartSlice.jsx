import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items : [],
  totalQuantity : 0 ,
  totalPrice : 0 ,
}

const cartSlice = createSlice({
    name : 'cart',
    initialState ,
    reducers : {
        addToCart(state, action){
         const newItem = action.payload 
         const existingItem = state.items.find((item)=>{
            return item.id === newItem.id
         })
         if(!existingItem){
            state.items.push({
                id : newItem.id,
                name : newItem.name,
                price :  newItem.price,
                quantity : 1 ,
                image : newItem.image
            })
         }else{
           existingItem.quantity++;
         }
         state.totalQuantity++ ;
         state.totalPrice += newItem.price
    },

}})



export const {addToCart} = cartSlice.actions ;

export default cartSlice.reducer ;