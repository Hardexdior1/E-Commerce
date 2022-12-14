import React from "react";
import "../Styles/Product.css";

const Home = ({ products, addToCart }) => {
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <div key={product.id} className="product">
            <img src={product.image} alt="" />
            <p>{product.title}</p>

            <p>{product.description}</p>
            <p>{product.price + " $"}</p>
            <button
              onClick={() => {
                addToCart(product);
              }}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
