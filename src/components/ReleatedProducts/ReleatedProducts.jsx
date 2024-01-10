import React from 'react'
import './ReleatedProducts.css'
import data_products from '../Assets/data'
import ItemComponent from '../Item/Item'


const ReleatedProducts = () => {
  return (
    <div className='releatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="releatedproducts-item">
            {data_products.map((item,i)=>{
                return (
                    <ItemComponent
                      key={i}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      newPrice={item.new_price} 
                      oldPrice={item.old_price}
                    />
                  );
           })}
        </div>
    </div>
  )
}

export default ReleatedProducts