require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

//Index


//New
app.get('/new', (req, res) => {
  res.render('/logs/new');
});
//Delete

//Update


//Create


//Edit


//Show







// Listen
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });