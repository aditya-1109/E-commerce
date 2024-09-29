import express from "express";
import Product from "../models/product.js";
import { Myproducts } from "../models/product.js";

const router = express.Router();

router.get('/', async (req, res) => {
  const getProducts = await Product.find({});
  const products=[...Myproducts, ...getProducts];
  res.json(products);
});

// Get product by ID
router.get('/:id', async (req, res) => {
  const product = await Product.findOne({id:req.params.id});
  if (product) {
    res.json(product);
  } else {
    const index=Myproducts.findIndex((produc)=>produc.id==req.params.id);
    if(index!=-1){
      res.json(Myproducts[index])
    }else{
    res.status(404).json({ message: 'Product not found' });
    }
  }
});

// Add a new product (Admin)
router.post('/', async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } = req.body;
  const product = new Product({
    name, price, description, image, brand, category, countInStock
  });

  product.id= product._id.toString();
  await product.save();
  
  res.json(product);
});

export default router;
