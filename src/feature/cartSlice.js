import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],

  reducers: {
    add(state, action){
      state.push(action.payload);
    },

    remove(state, action){
      return state.filter(item=>item.id !== action.payload);
    },

    changeQty(state, action){
      state.filter(item=>item.id === action.payload.id ? (item.qty = action.payload.qty) : item.qty)
    }
  },
})

// Action creators are generated for each case reducer function
export const { add, remove, changeQty } = cartSlice.actions

export default cartSlice.reducer