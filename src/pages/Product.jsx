import Card from "../components/Card"
import { useStateContext } from '../context/stateContext'

const Product = () => {
  const {state: {products}, loading} = useStateContext();

  return (
    <div className='product'>
      <div className='banner'>
        <img src="https://t4.ftcdn.net/jpg/02/24/88/07/360_F_224880717_YmNbocwrjak9AyvQ9QrTnELWCeOGtKvH.jpg" alt="" />
      </div>
      <h1>You may like this</h1>
      {loading ? (
        <div>Product Loading please wait...</div>
      ) : (
        <div className="wrapper">
          {products?.map(item=>{
          return (
            <Card product={item} key= {item.id}/>
          )
        })
      }
      </div>
      )}
    </div>
  )
}

export default Product