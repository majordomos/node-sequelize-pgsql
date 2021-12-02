require("dotenv").config();
const routes = require("./routes/routes");
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.NODE_PORT;

const db = require("./config/db.config");
db.authenticate()
  .then(() => {
    console.log(`Database connected...`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true}));

app.use("/", routes);
db.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening to ${port}`);
    });
  })
  .catch((err) => console.log(`Error: ${err}`));
