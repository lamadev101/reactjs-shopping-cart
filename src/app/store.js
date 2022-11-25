import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../feature/cartSlice'
import productReducer from '../feature/productSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
})