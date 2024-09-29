import React, { useState } from 'react';
import axios from 'axios';
import "../Styles/Admin.css"

function Admin() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription]= useState("");
  const [brand, setBrand]= useState("");
  const [category, setCategory]= useState("");
  const [countInStock, setCount]= useState("");

  const addProduct = async () => {
    await axios.post('http://localhost:5000/api/products', { name, price, description, image, brand, category, countInStock });
    setName("");
    setPrice("");
    setImage("");
    setDescription("");
    setBrand("");
    setCategory('');
    setCount('');
    alert("Product Added");
  };

  return (
    <div className='admin-container'>
      <h2>Add New Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="Number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      
      <label htmlFor="category">Choose category</label>
      <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
         <option value="" disabled>Select an option</option>
         <option value="Mobile">Mobile</option>
         <option value="Electronics">Electronics</option>
         <option value="Cars">Cars</option>
      </select>
      <input
        type="Number"
        placeholder="CountInStock"
        value={countInStock}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default Admin;
