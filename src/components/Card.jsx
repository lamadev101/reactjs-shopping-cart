import { Link } from 'react-router-dom'
import { useStateContext } from '../context/stateContext'

const Card = ({product}) => {
  const {state: {cart}, dispatch, setCartItem} = useStateContext();

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
        <div>
          {cart.some(p=>p.id === product.id)
            ?<button onClick={removeProduct} className="removeBtn">Remove from Cart</button>
            :<button onClick={addProduct} className="addBtn">Add to Cart</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Card