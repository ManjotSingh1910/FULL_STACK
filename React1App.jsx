import React from "react";
import ProductCard from "./ProductCard";

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <ProductCard name="Laptop" price={899} inStock={true} />
      <ProductCard name="Headphones" price={199} inStock={false} />
      <ProductCard name="Smartphone" price={699} inStock={true} />
    </div>
  );
}

export default App;
