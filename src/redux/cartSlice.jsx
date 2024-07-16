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

    removeItemsFromCart(state,action){
      const idToDelete  = action.payload
      const existingItem = state.items.find((item)=>{
        return item.id === idToDelete
      })
      if(existingItem){
        if(existingItem.quantity === 1) {
          state.items = state.items.filter((items)=>{
            return items.id !== idToDelete
          })
        }else {
          existingItem.quantity-- ;
        }
        state.totalQuantity-- ;
        state.totalPrice -= existingItem.price;
      }


    }

}})



export const {addToCart , removeItemsFromCart} = cartSlice.actions ;

export default cartSlice.reducer ;