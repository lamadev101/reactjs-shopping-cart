import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { cartReducer } from '../reducer/cartReducer'

const Context = createContext()

const StateContext = ({children}) => {
  const [loading, setLoading] = useState(false)
  const [cartItem, setCartItem] = useState(0);

  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  })

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        dispatch({
          type: "ADD_PRODUCTS",
          payload: data.products,
        })
        setLoading(false);
      }catch(err){
        console.log(err)
      }
    }

    fetchData();
  }, [])

  return (
    <Context.Provider value={{state, loading, setLoading, cartItem, dispatch, setCartItem}}>
      {children}
    </Context.Provider>
  )
}

export default StateContext
export const useStateContext =()=> useContext(Context);