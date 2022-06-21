import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
 
export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
      <Sidebar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products/:productId" element={<ProductDetail/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
