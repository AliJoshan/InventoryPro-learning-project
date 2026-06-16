require("dotenv").config();

const express = require("express");
const app = express();

console.log("SERVER FILE LOADED");

const connectDB = require("./database/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorMiddleware");
const cors = require("cors");

connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// Parse JSON FIRST
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Product Inventory API");
});

app.use("/users", userRoutes);
app.use("/products", productRoutes);

// Error middleware LAST
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
