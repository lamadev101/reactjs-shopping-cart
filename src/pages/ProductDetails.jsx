import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useStateContext } from '../context/stateContext'

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state;

  const [show, setShow] = useState()
  const {state: {cart}, dispatch, setCartItem} = useStateContext()
  

  const addProduct = ()=>{
    setCartItem(prev=>prev+1);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        thumbnail: product.thumbnail,
        qty: 1,
        price: product.price,
        title: product.title,
        brand: product.brand
      }
    })
  }

  const removeProduct = ()=>{
    setCartItem(prev=>prev-1);
    dispatch({
      type: "REMOVE_FROM_CART", 
      payload: product
    })
  }
  console.log(product)

  return (
    <div className='productDetails'>
        <div className='wrapper'>
          <div className="left">
            <div>
              {product?.images.slice(0,3).map((img, i)=>{
                return (
                  <img src={img} alt="" key={i} onMouseOver = {()=>setShow(img)} />
                  )
                })}
            </div>
            <img className='proimg' src={show ? show : product?.thumbnail} alt="" />
          </div>
          <div className="right">
            <h2>{product?.title}</h2>
            <span>Rating: {product?.rating}</span>
            <span>Brand: {product?.brand}</span>
            <span>Category: {product?.category}</span>
            <span>stock: {product?.stock}</span>
            <h3>Price: $ {product?.price} <small>Discount Rate: {product.discountPercentage} %</small></h3>
            <p>Description: <br/>{product?.description}</p>
            <div className="btns">
              {cart.some(p=>p.id === product.id)
                ?<button onClick={removeProduct} className="removeBtn">Remove from Cart</button>
                :<button onClick={addProduct} className="addBtn">Add to Cart</button>
              }
              <button className='buyBtn'>Buy Now</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductDetails