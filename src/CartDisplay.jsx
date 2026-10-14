import { useContext } from "react";
import { CartContext } from "./CartContext";

function CartDisplay() {
  const { cart, dispatch } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} — ₹{item.price} × {item.quantity}
            </p>

            <button
              onClick={() =>
                dispatch({
                  type: "UPDATE_QUANTITY",
                  payload: {
                    id: item.id,
                    quantity: item.quantity + 1,
                  },
                })
              }
            >
              +
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "UPDATE_QUANTITY",
                  payload: {
                    id: item.id,
                    quantity: item.quantity - 1,
                  },
                })
              }
            >
              -
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_ITEM",
                  payload: item.id,
                })
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CartDisplay;