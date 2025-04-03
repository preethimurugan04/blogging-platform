const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const engine = require("ejs-locals");

const app = express();
const port = 3000;

// Set up ejs-locals as the view engine
app.engine("ejs", engine);
app.set("view engine", "ejs");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/blogDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
const blogRoutes = require("./routes/blog");
app.use("/", blogRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
