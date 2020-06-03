const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// CONNECT DATABASE
connectDB();

// INIT MIDDLEWARE
app.use(express.json({ extended: false }));

//DEFINE ROUTES
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/day1", require("./routes/api/day1"));
app.use("/api/day2", require("./routes/api/day2"));
app.use("/api/day3", require("./routes/api/day3"));
app.use("/api/day4", require("./routes/api/day4"));
app.use("/api/day5", require("./routes/api/day5"));
app.use("/api/auth", require("./routes/api/auth"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
