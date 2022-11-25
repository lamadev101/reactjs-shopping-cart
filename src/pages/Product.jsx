import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card"
import Footer from "../components/Footer";
import { fetchProduct } from "../feature/productSlice";

const Product = () => {
  const dispatch = useDispatch()
  const { data: { products }, status } = useSelector(state => state.product)

  useEffect(() => {
    dispatch(fetchProduct());
  }, [])

  if (status === "loading") {
    return <h1>Product Loading please wait... </h1>
  }

  return (
    <div className='product'>
      <div className='banner'>
        <img src="https://disruptmagazine.com/wp-content/uploads/2021/03/7-ecommerce-content-marketing-examples-for-2019.png" alt="" />
      </div>
      <h1>Our Products</h1>
      <div className="wrapper">
        {products?.map(item => {
          return (
            <Card product={item} key={item.id} />
          )
        })
        }
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Product