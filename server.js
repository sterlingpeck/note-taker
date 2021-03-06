const express = require("express");
const Routes = require("./routes/htmlRoutes/htmlRoutes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", Routes);

app.listen(PORT, () => {
  console.log(`Server now running on port ${PORT}`);
});
