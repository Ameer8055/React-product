import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Products from './Products'
import { Link } from 'react-router-dom'

const Form = ({product,setproduct}) => {
 
  return (
    <>
    <div className='container'>
    <h3 className='text-center mt-5'>Add Products</h3>
    <Box className='formbox mt-2'
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Product Name"
          onChange={(e)=>setproduct({...product,name:e.target.value})}
        />
        <br />
        <TextField
        required
          id="outlined-disabled"
          label="Image Url"
          onChange={(e)=>setproduct({...product,Image:e.target.value})}
        />
        <br />
        <TextField
        required
          id="outlined-password-input"
          label="Price"
          type='Number'
          onChange={(e)=>setproduct({...product,Price:e.target.value})}
        />
        <br />
        <TextField
        required
          id="outlined-read-only-input"
          label="Rating"
          type='Number'
          onChange={(e)=>setproduct({...product,Rating:e.target.value})}
        />
      </div>
      <div className='text-center mt-2'>
        <Link to={'/newproduct'}><Button variant="contained">submit</Button></Link>
        
      </div>
    </Box>
    </div>
    
    
    </>
  )
}

export default Form