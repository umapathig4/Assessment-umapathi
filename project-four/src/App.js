import React, { useState } from 'react';
import './App.css';

function Picture({ src, onBuy }) {
  return (
    <div className="picture">
      <img src={src} alt="Picture" />
      <button onClick={() => onBuy(src)}>Buy</button>
    </div>
  );
}

function CartItem({ src }) {
  return (
    <li className="cart-item">
      <img src={src} alt="Cart Item" />
      <span>{src}</span>
    </li>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(picture) {
    setCartItems((prevCartItems) => [...prevCartItems, picture]);
  }

  function removeFromCart(picture) {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item !== picture)
    );
  }

  function pay() {
    setCartItems([]);
    alert('Payment successful!');
  }

  return (
    <div>
      <div className='container'>
      <h1>Picture Buying Portal</h1>

      <div className="pictures">
        <Picture src="picture1.jpg" onBuy={addToCart} />
        <Picture src="picture2.jpg"  onBuy={addToCart} />
        <Picture src="picture3.jpg" onBuy={addToCart} />
        <Picture src="picture4.jpg" onBuy={addToCart} />
        <Picture src="picture5.jpg" onBuy={addToCart} />
        <Picture src="picture6.jpg" onBuy={addToCart} />
      </div>

      <div className='cart' id="cart">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item} src={item} />
            ))}
          </ul>
        )}
        {cartItems.length > 0 && (
          <button onClick={pay}>Pay</button>
        )}
      </div>
    </div>
    </div>
  );
}

export default App;
