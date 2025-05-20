import { useState } from "react";

const Cart = ({ cart, setCart }) => {
  const updateQuantity = (index, amount) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += amount;
    if (updatedCart[index].quantity === 0) {
      updatedCart.splice(index, 1); // ✅ Si la cantidad llega a 0, se elimina el producto
    }
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * parseFloat(item.price.replace("$", "")), 0);
  };

  return (
    <div>
      <h2>🛒 Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <p>{item.name} - {item.price} | Cantidad: {item.quantity}</p>
                <button onClick={() => updateQuantity(index, 1)}>➕</button>
                <button onClick={() => updateQuantity(index, -1)}>➖</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
          <button disabled={cart.length === 0} onClick={() => alert("Pedido realizado 🎉")}>Realizar pedido</button>
        </>
      )}
    </div>
  );
};

export default Cart;
