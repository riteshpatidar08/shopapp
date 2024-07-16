import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { removeItemsFromCart  , addToCart} from '../redux/cartSlice'
function Cart() {
  const dispatch = useDispatch()
  const {items} = useSelector((state)=> state.cart)

  const handleRemoveItem = (id) => {
    dispatch(removeItemsFromCart(id))
  }
  const subTotal = items.reduce((accu , item)=>{
    return accu + item.price * item.quantity
  },0)

  const onIncrease = (id) =>{
  dispatch(addToCart({id}))
  }
  
  const onDecrease = (id) => {
dispatch(removeItemsFromCart(id))
  }
  return (
    <div className='max-w-7xl mx-auto mt-2 px-8 py-12'>
      <h1 className="text-start leading-wide text-2xl mb-5 font-medium">
       Shopping Cart
      </h1>
      {
        items.length > 0 ? 
          items.map((item)=>(
             <div>
              <p>{item.name}</p>
              <img className='w-20 h-20' src={item.image}/>
             
              
              <p>price : $ {item.quantity * item.price}</p>
              <div className=' border border-gray-300   p-2 w-28 justify-center flex item-center gap-4 my-2'>
                 <button onClick={()=>onIncrease(item.id)}>+</button>
              <p>{item.quantity}</p>
              <button onClick={()=>onDecrease(item.id)}>-</button>
              </div>
             
              <button onClick={()=> handleRemoveItem(item.id)} className='bg-red-500 text-white px-4 py-2'>Remove</button>

             
             </div>


           ))
            
         : 
          <p className='text-start text-red-500'>Your Cart is empty</p>
        
      }
       <h1 className='text-end text-2xl'>Subtotal : $ {subTotal}</h1>
    </div>
  )
}

export default Cart
