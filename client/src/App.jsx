import React from "react"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import ProductPage from "./Page/ProductPage"
import { Routes, Route } from "react-router-dom"

function App() {


  return (
    <>

    <Header/> 
    <Routes>
    <Route path="/" element={<ProductPage/>} />
    </Routes>

    <Footer/>   
    </>
  )
}

export default App
