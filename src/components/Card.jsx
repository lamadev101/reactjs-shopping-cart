import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { add, remove } from '../feature/cartSlice';


const Card = ({product}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state=>state.cart);

  const addProduct = ()=>{
    dispatch(add({
      id: product.id,
      img: product.thumbnail,
      price: product.price,
      qty: 1,
      title: product.title,
      brand: product.brand
    }))
  }
  
  const removeProduct = ()=>{
    dispatch(remove(product.id))
  }

  return (
    <div className='card'>
      <Link to={`product/${product.id}`} state={product}>
        <img src={product?.thumbnail} alt="" />
      </Link>
      <div className="info">
        <div className='titlePrice'>
          <span className='title'>{product.title}</span>
          <span className='price'>$ {product.price}</span>
        </div>
        <div className='bottom'>
          <div className='left'>
            <span className='brand'>Brand: {product.brand}</span> <br />
            <span className='category'>Ctg: {product.category}</span>
          </div>
          {cartItems.some(p=>p.id === product.id)
            ?<button onClick={removeProduct} className="removeBtn">Remove</button>
            :<button onClick={addProduct} className="addBtn">Add to cart</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Card