import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css';
import ProductCatalog from './ProductCatalog';
import ShoppingCart from './ShoppingCart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.id !== productToRemove.id));
  };

  return (
    <div className="App container mt-5">
      <h1 className="text-center mb-4">BuyBuzz: Buzz Into the Best Deals!</h1>
      <div className="row">
        <div className="col-md-8">
          <ProductCatalog addToCart={addToCart} />
        </div>
        <div className="col-md-4">
          <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
