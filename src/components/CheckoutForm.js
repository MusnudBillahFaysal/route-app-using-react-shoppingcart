import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './CSS/checkoutform.css';
import formatCurrency from '../util';
import Cart from './Cart';
import { useLocation } from 'react-router-dom';

import { useUserContext } from './UserContext'; // Import the user context
const CheckoutForm = () => {
  const location = useLocation();
  const cartItems = location?.state?.cartItems || [];
  const { state } = useUserContext(); // Use the UserContext
  //
  // const CheckoutForm = () => {
  //   const location = useLocation();
  //   const cartItems = location?.state?.cartItems || [];
  //   const key = location?.key || null;

  // const CheckoutForm = ({ cartItems }) => {
  return (
    // <div key={key} className="container">
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <h2>Checkout form</h2>
        </div>

        <div className="row g-5">
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <br></br> <br></br>
            <form className="needs-validation" noValidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      required
                    />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>
                <br></br>
                <br></br>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select className="form-select" id="country" required>
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <select className="form-select" id="state" required>
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>

              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label" htmlFor="credit">
                    Credit card
                  </label>
                  <br></br>
                  <br></br>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label" htmlFor="debit">
                    Debit card
                  </label>
                  <br></br>
                  <br></br>
                </div>
                <div className="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label" htmlFor="paypal">
                    PayPal
                  </label>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">
                    Name on card
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Continue to checkout
              </button>
            </form>
          </div>
          <div className="col-md-5 col-lg-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge bg-secondary rounded-pill">
                {state.cartItems.length === 0 ? (
                  <div className="cart cart-header">0</div>
                ) : (
                  state.cartItems.length
                )}
              </span>
            </h4>
            <div>
              <div className="cart">
                <ul className="cart-items">
                  {state.cartItems.map((item) => (
                    <li key={item._id}>
                      <div>
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div>
                        <div>{item.title}</div>
                        <div className="price">
                          {formatCurrency(item.price)} x {item.count}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="total">
                <b>
                  Total:{' '}
                  {formatCurrency(
                    state.cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </b>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutForm;
