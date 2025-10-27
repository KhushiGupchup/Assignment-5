import React from "react";
import useFetch from "../hooks/useFetch";
import "./ProductList.css";

const ProductList = () => {
  const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/products");

  if (loading) return <p className="loading">Loading products...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  // Show only 20 products
  const visibleProducts = data?.slice(0, 20);

  return (
    <div className="product-container">
      {visibleProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.images?.[0]} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
