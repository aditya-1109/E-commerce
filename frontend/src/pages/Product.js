import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/ProductList.css";

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3 className='product-info'>{product.name}</h3>
      <p className='product-info'>{product.price} USD</p>
      <Link to={`/Home/product/${product.id}`}>
        <button className='add-to-cart-btn'>View Details</button>
      </Link>
    </div>
  );
};

export default Product;
