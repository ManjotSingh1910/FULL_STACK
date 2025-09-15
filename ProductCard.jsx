import React from "react";

function ProductCard({ name, price, inStock }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      margin: "10px",
      width: "220px",
      boxShadow: "2px 2px 6px rgba(0,0,0,0.1)"
    }}>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p style={{ color: inStock ? "green" : "red" }}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;
