import React from 'react';

import data from './data.json';
import Products from './Products';

class Productlist extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: JSON.parse(localStorage.getItem('cartItems')),
      size: '',
      sort: '',
    };
  }

  render() {
    return (
      <div className="grid-container">
        <header className="header">
          <div className="header__text">Productlist Page</div>
          <div className="header__right_h">
            <a href="/contact">Contact</a>
          </div>
          <div className="header__right">
            <a href="/">go back</a>
          </div>
        </header>

        <main>
          <div className="content">
            <div className="main">
              <Products
                products={this.state.products}
                addTocart={this.addTocart}
              ></Products>
            </div>
            <div className="sidebar"></div>
          </div>
        </main>
        <footer>All right is reserved.</footer>
      </div>
    );
  }
}

export default Productlist; // feature 1
