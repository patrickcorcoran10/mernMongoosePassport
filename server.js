const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan")

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(logger("dev"));
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/mernPassport',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

// app.use(require("./routes/api-routes.js"));

app.listen(PORT, () => {
    console.log("We are working out on ", PORT)
})