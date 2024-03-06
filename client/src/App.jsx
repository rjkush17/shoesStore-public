import React, {useState} from "react"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import ProductPage from "./Page/ProductPage"
import { Routes, Route } from "react-router-dom"
import Home from "./Page/Home"
import Login from "./models/Login"
import Cart from "./models/Cart"
import Shop from "./Page/Shop"
import NotFoundPage from "./Page/NotFoundPage"


function App() {


  const [isLoginOpen, SetIsLoginOpen] = useState(true)
  const handleLoginopen = () =>{
    SetIsLoginOpen(!isLoginOpen)
  }

  const [isCartOpen, SetIsCartOpen] = useState(false)
  const handleCartOpen = () =>{
    SetIsCartOpen(!isCartOpen)
  }

  return (
    <>
   { isLoginOpen &&  <Login handleLoginopen={handleLoginopen} />}
   {isCartOpen && <Cart handleCartOpen={handleCartOpen}/>}
    <Header handleLoginopen={handleLoginopen} handleCartOpen={handleCartOpen} /> 
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/productpage/:productID" element={<ProductPage/>} />
    <Route path="/shop/:type" element={<Shop/>} />
    <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    <Footer/> 
    </>
  )
}

export default App
