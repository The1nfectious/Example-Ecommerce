import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import ItemComponent from '../components/Item/Item';


const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  const filteredProducts = all_products.filter(item => props.category === item.category);

  return (
    <div>
      <div className='shop-category'>
        <img src={props.banner} alt="" />
      </div>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.map((item) => (
          <ItemComponent key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              newPrice={item.new_price}
              oldPrice={item.old_price}
          />
        ))}
      </div>
      <div className="shopcategory-loadmore">
          Explore More
      </div>
    </div>
  );
}

export default ShopCategory;