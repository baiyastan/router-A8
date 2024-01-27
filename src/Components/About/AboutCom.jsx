import React from 'react'

import products from '../../data/product'

function AboutCom() {
  return (
    <div>
        {
            products.map((item) => (
                <div className='item' key={item.id}>
                    <img src={item.image} alt="" />
                </div>
            ))
        }
    </div>
  )
}

export default AboutCom