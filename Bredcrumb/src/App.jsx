import { useState } from 'react'

import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import ProductsListing from './pages/ProductsListing'
import Products from './pages/Products'
import BreadCrumbs from './components/BreadCrumbs'

function App() {
  

  return (
    <BrowserRouter>
    {/* BreadCrumbs */}
    <BreadCrumbs></BreadCrumbs>

    {/* Router */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<ProductsListing/>}/>
      <Route path='/products/:id' element={<Products/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
