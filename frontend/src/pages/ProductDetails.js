import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/store';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../Styles/ProductDetails.css";

const ProductDetails = () => {
  const {id}= useParams();
  const [product, setProduct]= useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`http://localhost:5000/api/products/${id}`); 
      setProduct(response.data);
    };
    fetchProducts();
  });

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <div className='productDetails'>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p className='price'>Price: ${product.price}</p>
      <div>
        <label>Quantity:</label>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {[...Array(product.countInStock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
      </div>
      <button onClick={addToCartHandler}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
