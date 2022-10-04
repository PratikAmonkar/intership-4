const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

const app = express();
const formRoutes = require("./router/formRoutes");
app.use(express.json());
app.use(require("cors")());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/", formRoutes);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
