import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const [title, settitle] = useState('')
  const [price, setprice] = useState('')
  const navigate  = useNavigate()
  const { id } = useParams()

  const saveProduct = async(e) =>{
    e.preventDefault();
    const response = await axios.patch('http://localhost:5000/products/'+id,{
      title:title,
      price:price
    })
    await navigate('/')
  }
  const getProductById = async() =>{
    const response = await axios.get(`http://localhost:5000/products/${id}`)
    settitle(response.data.title)
    setprice(response.data.price)
  }

  useEffect(() => {
    getProductById()
  }, [])
  
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

export default EditProduct