import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Form from './components/Form'
import Products from './components/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Newproduct from './components/Newproduct'

function App() {
  const[product,setproduct]=useState({name:"",Image:"",Price:"",Rating:""})
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/form" element={<Form product={product} setproduct={setproduct}/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path='/newproduct' element={<Newproduct product={product} setproduct={setproduct} />} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
