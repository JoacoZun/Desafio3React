import React, { useState } from "react";
import { pizzaCart } from "../assets/js/pizzas";
import { Button, Image } from 'react-bootstrap';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((pizza) =>
        pizza.id === id && pizza.count > 0
          ? { ...pizza, count: pizza.count - 1 }
          : pizza
      )
      .filter((pizza) => pizza.count > 0);
    setCart(updatedCart);
  };

  const totalAmount = cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);

  return (
    <div className="cart-container">
      <h2>Detalle del pedido:</h2>
      {cart.length > 0 ? (
        cart.map((pizza) => (
          <div key={pizza.id} className="cart-item d-flex align-items-center mb-3">
            <Image src={pizza.img} roundedCircle style={{ width: '60px', height: '60px' }} />
            <div className="ms-3 flex-grow-1">
              <h5>{pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</h5>
            </div>
            <div className="d-flex align-items-center">
              <Button
                variant="success"
                onClick={() => decreaseQuantity(pizza.id)}
                className="me-2"
              >
                -
              </Button>
              <span className="me-2">{pizza.count}</span>
              <Button
                variant="success"
                onClick={() => increaseQuantity(pizza.id)}
                className="me-2"
              >
                +
              </Button>
              <span>=</span>
              <strong className="ms-2">${(pizza.price * pizza.count).toLocaleString()}</strong>
            </div>
          </div>
        ))
      ) : (
        <p>Aún no añades pizzas al carrito.</p>
      )}
      <hr />
      {cart.length > 0 && (
        <div className="d-flex justify-content-between align-items-center">
          <h4>Total</h4>
          <h4 className="ms-2">= ${totalAmount.toLocaleString()}</h4>
        </div>
      )}
      <Button variant="danger" className="mt-3" disabled={cart.length === 0}>
        Ir a pagar
      </Button>
    </div>
  );
};

export default Cart;
