import axios, { Axios } from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [title, settitle] = useState('')
  const [price, setprice] = useState('')
  const navigate  = useNavigate()
  const saveProduct = async(e) =>{
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/products',{
      title:title,
      price:price
    })
    
    // alert('A name was submitted: '+JSON.stringify(response.data));
    await navigate('/')
  }
  return (
    <div>
        <form onSubmit={saveProduct}>
          <div className='field'>
            <label className='label'>Title</label>
            <input 
              type="text" 
              className='input' 
              placeholder='Title' 
              value={title}
              onChange={(e) => settitle(e.target.value)}
              />
          </div>
          <div className='field'>
            <label className='label'>Price</label>
            <input 
              type="text" 
              className='input' 
              placeholder='Price'
              value={price}
              onChange={(e) => setprice(e.target.value)}
              />
          </div>
          <div className='field'>
            <button className='button is-primary'>Save</button>
          </div>
        </form>
    </div>
  )
}

export default AddProduct