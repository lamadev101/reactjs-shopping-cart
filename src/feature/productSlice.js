import { createSlice } from '@reduxjs/toolkit'

const STATUSES = Object.freeze({
  IDEL: 'idel',
  ERROR: 'error',
  LOADING: 'loading',
});

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    status: STATUSES.IDEL,
  },

  reducers: {
    setProduct(state, action){
      state.data = action.payload;
    },
    setStatus(state, action){
      state.status = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setProduct, setStatus } = productSlice.actions

export default productSlice.reducer


// Thunks
export function fetchProduct(){
  return async function featchProductThunk(dispatch, getState){
    dispatch(setStatus(STATUSES.LOADING));
    try{
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      dispatch(setProduct(data));
      dispatch(setStatus(STATUSES.IDEL));
    }catch(err){
      console.log(err.message);
      dispatch(setStatus(STATUSES.ERROR));
    }
  }
}