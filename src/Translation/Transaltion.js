import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Login from './Login'
import Products from './Products'

const Translation = () => {
  return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </BrowserRouter>
  )
}
export default Translation
