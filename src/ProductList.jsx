// Child Component 1: Product List
export default function ProductList({ addToCart }) {
    const products = [
      { id: 1, name: "Apple", price: 1.5 },
      { id: 2, name: "Banana", price: 1.2 },
      { id: 3, name: "Orange", price: 1.8 },
    ];
  
    return (
      <div>
        <h2>Products</h2>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.name} - ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  }