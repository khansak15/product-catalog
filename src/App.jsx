import { useState } from "react";

function App() {

  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 },
    { id: 4, name: "Headset", price: 200}
  ];

  const [search, setSearch] = useState("");

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Product Catalog</h1>

      <input
        placeholder="Search product"
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filtered.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;