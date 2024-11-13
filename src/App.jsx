import { useState } from 'react'
import ProductList from './ProductList';
import Cart from './Cart';


function App() {

  const [cart, setCart] = useState([]); // Lifted state for cart items

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <h1>My Shopping App</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );

 
}

export default App





 // const [temperature, setTemperature] = useState(""); // State is lifted up here

  // return (
  //   <div>
  //     <TemperatureInput temperature={temperature} setTemperature={setTemperature} />
  //     <TemperatureDisplay temperature={temperature} />
  //   </div>
  // );