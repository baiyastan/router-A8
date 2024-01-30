import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'

import products from '../../data/product'

function AboutCom() {
  function findDiscount(p, d){
    const result = ((p - d) / p) * 100
    return result.toFixed(0)
  }
  return (
    <div className='about'>
        {
            products.map((item) => (
                <Link to={`/product/${item.id}`} className='item' key={item.id}>
                    <img className='item-image' src={item.image} alt="" />
                    { item.discount && <div className='discount'>-{findDiscount(item.price, item.discountedPrice)}%</div>}
                    <p>{item.title}</p>
                </Link>
            ))
        }
    </div>
  )
}

export default AboutCom