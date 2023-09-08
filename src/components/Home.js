import React, { useState, useEffect } from 'react';
import data from './data.json';
import Products from './Products';
import Filter from './Filter';
import Cart from './Cart';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

import { useUserContext } from './UserContext'; // Import the user context

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState('');
  const [sort, setSort] = useState('');
  const { state, dispatch } = useUserContext(); // Use the user context

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  // Add this useEffect to update isLoggedIn immediately after logout
  useEffect(() => {
    if (!state.isLoggedIn) {
      // You might need to replace 'isLoggedIn' with the appropriate key in your localStorage
      localStorage.setItem('isLoggedIn', 'false');
    }
  }, [state.isLoggedIn]);

  // const handleCreateOrder = () => {
  //   if (!state.isLoggedIn) {
  //     navigate('/loginform'); // Redirect to login if not logged in
  //   } else {
  //     const order = {
  //       cartItems: state.cartItems,
  //     };
  //     navigate('/checkoutform', { state: { order } });
  //   }
  // };

  // const isLoggedIn = state.isLoggedIn;
  const createOrder = (order) => {
    navigate('/checkoutform', { state: { cartItems: order.cartItems } });
  };
  const handleCreateOrder = () => {
    if (!state.isLoggedIn) {
      navigate('/loginform');
    } else {
      const order = {
        cartItems: state.cartItems,
      };
      dispatch({ type: 'CREATE_ORDER', payload: order });

      navigate('/checkoutform', { state: { cartItems: order.cartItems } });
    }
  };

  const sortProducts = (event) => {
    const sortValue = event.target.value;
    setSort(sortValue);
    setProducts(
      [...products].sort((a, b) => {
        if (sortValue === 'lowest') {
          return a.price > b.price ? 1 : -1;
        } else if (sortValue === 'highest') {
          return a.price < b.price ? 1 : -1;
        }
        return a._id > b._id ? 1 : -1;
      })
    );
  };

  const filterProducts = (event) => {
    const sizeValue = event.target.value;
    setSize(sizeValue);
    if (sizeValue === '') {
      setProducts(data.products);
    } else {
      setProducts(
        data.products.filter(
          (product) => product.availableSizes.indexOf(sizeValue) >= 0
        )
      );
    }
  };

  const addTocart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, count: 1 } });
  };

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };
  // const handleLogout = () => {
  //   dispatch({ type: 'LOGOUT' }); // Dispatch logout action
  // };
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    // navigate('/loginform');
  };

  return (
    <div className="grid-container">
      <header>
        <a href="#">React Shopping Cart</a>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">Productlist</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              {console.log('isLoggedIn:', state.isLoggedIn)}{' '}
              {/* Check the state */}
              {state.isLoggedIn ? (
                <>
                  <span>Logged in</span>
                  <button className="button primary" onClick={handleLogout}>
                    Log out
                  </button>
                  {console.log('isLoggedInS:', state.isLoggedIn)}{' '}
                </>
              ) : (
                <Link to="/loginform">Log in</Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={products.length}
              size={size}
              sort={sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
            <Products products={products} addTocart={addTocart} />
          </div>
          <div className="sidebar">
            <Cart
              cartItems={state.cartItems || []}
              removeFromCart={removeFromCart}
              createOrder={handleCreateOrder}
              addTocart={addTocart}
            />
          </div>
        </div>
      </main>
      <footer>All rights reserved.</footer>
    </div>
  );
};

export default Home;
