import React, {useState} from 'react'
import {useParams} from "react-router-dom"
import "../App.css"

import products from '../data/product'

function Product() {
    const {id} = useParams()
    const findProduct = products.find((x) => x.id === parseInt(id))

    const [image, setImage] = useState(findProduct.image)



  return (
    <div className='product'>
        <img className='product-img' src={image} alt={findProduct.title}/>
        {
          findProduct.images.map((item, index) => (
            <img onClick={() => setImage(item)} className='phone' key={index} src={item}  alt=''/>
          ))
        }
    </div>
  )
}

export default Product