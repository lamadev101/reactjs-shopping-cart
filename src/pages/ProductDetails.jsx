import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import Footer from '../components/Footer';
import { add, remove } from '../feature/cartSlice';

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state;
  const [show, setShow] = useState()

  const { data: { products } } = useSelector(state => state.product)
  const cartItems = useSelector(state => state.cart)
  const dispatch = useDispatch();

  const similarProduct = products.filter(prod => prod.category === product.category && prod.id !== product.id);


  const addProduct = () => {
    dispatch(add({
      id: product.id,
      img: product.thumbnail,
      price: product.price,
      qty: 1,
      title: product.title,
      brand: product.brand
    }))
  }

  const removeProduct = () => {
    dispatch(remove(product.id))
  }

  const handleScrollCard = (img) => {
    setShow(img);
    window.scrollTo(0, 0);
  }
  
  return (
    <>
      <div className='productDetails'>
        <div className='wrapper'>
          <div className="left">
            <div>
              {product?.images.slice(0, 3).map((img, i) => {
                return (
                  <img src={img} alt="" key={i} onMouseOver={() => setShow(img)} />
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
            <p>Description: <br />{product?.description}</p>
            <div className="btns">
              {cartItems.some(p => p.id === product.id)
                ? <button onClick={removeProduct} className="removeBtn">Remove from Cart</button>
                : <button onClick={addProduct} className="addBtn">Add to Cart</button>
              }
              <button className='buyBtn'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>


      <div className='similarPorduct'>
        <h1>Similar Products</h1>
        <marquee behavior="" direction="right">
          {similarProduct.map(item => (
            <span className="productImg" key={item.id}>
              <Link to={`/product/${item.id}`} state={item} >
                <img src={item?.thumbnail} alt="" onClick={()=>handleScrollCard(item.thumbnail)} />
              </Link>
            </span>
          ))}
        </marquee>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default ProductDetails