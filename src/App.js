import { Routes, Route, useNavigate, createSearchParams } from "react-router-dom"

import { NavBar } from "./components/navbar/navbar"
import {Products} from "./pages/products/products"
import { Product } from "./pages//product/product"
import { Cart } from "./pages/cart/cart"
import { NotFound } from "./pages/pageNotFound/not-found"
import { useCart } from "./context/cart"
import Footer from "./components/footer"


function App() {

  const navigate = useNavigate();
  const { cartItemCount } = useCart();

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }

  return (
    <>
      <NavBar onSearch={onSearch} cartItemCount={cartItemCount()} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
     
    </>
  );
}

export default App;