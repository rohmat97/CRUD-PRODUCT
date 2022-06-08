import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setproducts] = useState([])

    const getProducts = async() =>{
        const response = await axios.get('http://localhost:5000/products')
        console.log('response.data', response.data)
        setproducts(response.data)
    }

    const deleteProduct =async (id) =>{
        await axios.delete('http://localhost:5000/products/'+id)
        getProducts()
    }

  useEffect(() => {
    getProducts()
  
    return () => {
      
    }
  }, [])
  return (
    <div>
        <Link to='/add' className='button is-primary mt-2'>Add New</Link>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((data, index) =>(
                        <tr key={data.id}>
                            <td>{index +1 }</td>
                            <td>{data.title}</td>
                            <td>{data.price}</td>
                            <td>
                                <Link className="button is-small is-info" to={`/edit/${data.id}`}>Edit</Link>
                                <button onClick={()=> deleteProduct(data.id)} className="button is-small is-danger" >Delete</button>
                            </td>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default ProductList