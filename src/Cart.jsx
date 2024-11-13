// Child Component 2: Cart
export default function Cart({ cart }) {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <div>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        )}
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    );
  }