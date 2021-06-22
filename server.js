const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workoutracker",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

//connection to API route file
app.use(require("./routes/api_routes.js"));
//connection to HTML route file
// app.use(require("./routes/html_routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
