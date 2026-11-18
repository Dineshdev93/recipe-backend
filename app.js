
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check API
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Recipe Backend is running",
  });
});

// User routes
const userRoutes = require("./routes/users/userAuthenticate");
app.use("/userAuth/api", userRoutes);

// Recipe routes
const recipeRoutes = require("./routes/recepies/recipeRoutes");
app.use("/recipes/api", recipeRoutes);

// Review routes
const reviewRoutes = require("./routes/reviews/reviewRoute");
app.use("/review/api", reviewRoutes);

module.exports = app;
