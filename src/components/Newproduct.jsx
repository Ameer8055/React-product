import React from 'react'
import './newproduct.css'

const Newproduct = ({product}) => {
  return (
    <>
      <h2>New Product</h2>
      <div className='item mx-auto mt-4'>
      <p className='fw-bold'>Product Name: {product.name}</p>
      <p className='fw-bold'>Product Price: {product.Price}</p>
      <p className='fw-bold'>Product Image URL: {product.Image}</p>
      <p className='fw-bold'>Product Rating: {product.Rating}</p>
      </div>
      


    </>
  )
}

export default Newproduct