import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import userrouter from "./routes/userRoutes.js";
import router from "./routes/productRoutes.js";


dotenv.config();

connectDB();

const app = express();
app.use(express.json()); 
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/user', userrouter);

app.use('/api/products', router);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
