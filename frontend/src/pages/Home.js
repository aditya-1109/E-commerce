import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import "../Styles/ProductList.css";

function Home () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:5000/api/products'); 
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="productList">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
