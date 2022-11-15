import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CheckOut from "./pages/CheckOut";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element= <Product/> />
        <Route path="/product/:id" element= <ProductDetails/> />
        <Route path="/checkout" element=<CheckOut/> />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
