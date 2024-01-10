import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import all_products from '../Assets/all_products';

const CartItems = () => {
  const {getTotalCartAmount,cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cart-items'>
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            
            <React.Fragment key={product.id}>
              <div className="cart-items-format cart-items-format-main">
                <img src={product.image} alt={product.name} className='cart-items-product-icon'/> 
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className='cart-items-quantity'>{cartItems[product.id]}</button>
                <p>${product.new_price * cartItems[product.id]}</p>
                <img src={remove_icon} onClick={() => removeFromCart(product.id)} alt="Remove item" className='cart-items-remove-icon'/> 
              </div>
              <hr />
            </React.Fragment>
          );
        } else {
          return null;
        }
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cart-items-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-items-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cart-items-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>Checkout</button>
        </div>
        <div className="cart-items-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-items-promobox">
                <input type="text" placeholder='promo code' />
                <button>Apply</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;