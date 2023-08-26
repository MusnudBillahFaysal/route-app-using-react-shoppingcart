import React, { useState, useEffect } from 'react';
import data from './data.json';
import Products from './Products';
import Filter from './Filter';
import Cart from './Cart';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState(data.products);
  // const [cartItems, setCartItems] = useState(
  //   JSON.parse(localStorage.getItem('cartItems'))
  // );
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || [] // Default to an empty array
  );

  const [size, setSize] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // const createOrder = (order) => {
  //   navigate('/checkoutform', { state: { cartItems } }); // Pass cartItems directly as a prop
  // };

  const createOrder = (order) => {
    navigate('/checkoutform', { state: { cartItems } });
  };

  // Rest of your code

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter(
      (item) => item._id !== product._id
    );
    setCartItems(updatedCartItems);
  };

  const addTocart = (product) => {
    const updatedCartItems = [...cartItems];
    let alreadyInCart = false;
    updatedCartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart) {
      updatedCartItems.push({ ...product, count: 1 });
    }
    setCartItems(updatedCartItems);
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

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setCartItems([]);
  };

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

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

  // const handleCreateOrder = () => {
  //   if (!isLoggedIn) {
  //     navigate('/loginform');
  //   } else {
  //     const order = {
  //       cartItems,
  //     };
  //     createOrder(order);

  //     navigate('/checkoutform', {
  //       state: { cartItems },
  //       key: cartItems.length > 0 ? Date.now() : 'empty',
  //     });
  //   }
  // };
  // const handleCreateOrder = () => {
  //   if (!isLoggedIn) {
  //     navigate('/loginform');
  //   } else {
  //     const order = {
  //       cartItems,
  //     };
  //     createOrder(order);

  //     navigate('/checkoutform');
  //   }
  // };

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
              {isLoggedIn ? (
                <>
                  <span>Logged in</span>
                  <button className="button primary" onClick={handleLogout}>
                    Log out
                  </button>
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
            <Products products={products} addTocart={addTocart} />{' '}
            {/* Updated prop name */}
          </div>
          <div className="sidebar">
            <Cart
              // cartItems={cartItems}
              cartItems={cartItems || []} // Default to an empty array
              removeFromCart={removeFromCart}
              createOrder={handleCreateOrder} // Update the prop name here
              addTocart={addTocart}
            />
          </div>
        </div>
      </main>
      <footer>All right is reserved.</footer>
    </div>
  );
};

export default Home;
