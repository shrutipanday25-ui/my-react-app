import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addItem() {
    const newItem = {
      id: Date.now(),
      name: "Apple",
      qty: 1,
    };

    setCart([...cart, newItem]);
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function increaseQty(id) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  const totalItems = cart.reduce(
    (total, item) => total + item.qty,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      <button onClick={addItem}>Add Item</button>
      <button onClick={clearCart}>Clear Cart</button>

      <h2>Cart Items</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.qty}{" "}

              <button onClick={() => increaseQty(item.id)}>
                +1 Qty
              </button>

              <button onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <h3>Total Items: {totalItems}</h3>
    </div>
  );
}

export default App;