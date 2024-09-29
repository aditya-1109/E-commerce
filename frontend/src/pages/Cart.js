import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../redux/store';
import "../Styles/cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const updateItemQuantity = (id, quantity) => {
    if (quantity < 1) return; 
    dispatch(updateQuantity({ id, quantity }));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty!</p>
          <Link to="/Home">Go Shopping</Link>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.image} alt={item.name} width="100" />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <div>
                  <label>Quantity: </label>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateItemQuantity(item._id, Number(e.target.value))}
                    min="1"
                  />
                </div>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCartHandler(item._id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${calculateTotal()}</h3>
            <Link to="/Home/checkout">
              <button>Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
