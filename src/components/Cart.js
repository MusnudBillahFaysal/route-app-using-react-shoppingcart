import React from 'react';
import formatCurrency from '../util';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, createOrder, addTocart }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    // Add any additional logout logic if needed
    // Redirect the user to the login page or any other appropriate page
  };

  const handleCreateOrder = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
      // Redirect the user to the login page if not logged in
      navigate('/loginform');
    } else {
      // Proceed with the checkout
      const order = {
        cartItems,
      };
      createOrder(order);

      // Redirect the user to the checkout form
      navigate('/checkoutform', { state: { cartItems } });
    }
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="cart cart-header">Cart is empty</div>
      ) : (
        <div className="cart cart-header">
          You have {cartItems.length} items in the cart
        </div>
      )}

      <div>
        <div>
          <div className="cart">
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.title}></img>
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div className="price">
                      {formatCurrency(item.price)} x {item.count}
                    </div>
                    <div className="right">
                      <button
                        className="button"
                        onClick={() => removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {cartItems.length !== 0 && (
            <div>
              <div className="cart">
                <div className="total">
                  <div>
                    <b>
                      Total:{' '}
                      {formatCurrency(
                        cartItems.reduce((a, c) => a + c.price * c.count, 0)
                      )}
                    </b>
                  </div>
                  <button
                    onClick={handleCreateOrder}
                    className="button primary"
                  >
                    <b>Proceed</b>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
