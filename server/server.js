const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://localhost:27017/stockApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/stocks", require("./routes/stocks"));

app.listen(5000, () => console.log("Server running on port 5000"));