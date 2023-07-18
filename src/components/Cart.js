import React, { useState } from 'react';
import formatCurrency from '../util';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, createOrder }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [showCheckout, setShowCheckout] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'address') setAddress(value);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    // Add any additional logout logic if needed
    // Redirect the user to the login page or any other appropriate page
  };

  const handleCreateOrder = (e) => {
    e.preventDefault();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
      // Redirect the user to the login page if not logged in
      navigate('/loginform');
    } else {
      // Proceed with the checkout
      const order = {
        email,
        name,
        address,
        cartItems,
      };
      createOrder(order);
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
                    onClick={() => setShowCheckout(true)}
                    className="button primary"
                  >
                    <b>Proceed</b>
                  </button>
                </div>
              </div>

              {showCheckout && (
                <div className="cart">
                  <form onSubmit={handleCreateOrder}>
                    <ul className="form-container">
                      <li>
                        <label>Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          value={email}
                          onChange={handleInput}
                        ></input>
                      </li>
                      <li>
                        <label>Name</label>
                        <input
                          name="name"
                          type="text"
                          required
                          value={name}
                          onChange={handleInput}
                        ></input>
                      </li>
                      <li>
                        <label>Address</label>
                        <input
                          name="address"
                          type="text"
                          required
                          value={address}
                          onChange={handleInput}
                        ></input>
                      </li>
                      <li>
                        <button className="button primary" type="submit">
                          Checkout
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
