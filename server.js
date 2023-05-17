require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const Logs = require("./models/logs");
const { connect, connection } = require("mongoose");

//Database connection
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
connection.once("open", () => {
  console.log("connected to mongo");
});

// View Engine Middleware Configure
const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);
// This line tells the render method the default file extension to look for.
app.set('view engine', 'jsx');
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specific the views directory everytime we use the render method
app.set('views', './views');

//Middleware
app.use(express.urlencoded({ extended: false }));

// Custom Middleware
app.use((req, res, next) => {
  console.log('Middleware running...');
  next();
});

//Index
app.get('/', (req, res) => {
res.render('/logs')
});

//New
app.get('/logs/new', (req, res) => {
  res.render('/New');
});
//Delete

//Update


//Create
app.post('/logs/', (req, res) => {
  req.body.logs = req.body.logs === 'true/false';
  logs.push(req.body);
  
  res.send(req.body);
});


//Edit


//Show
app.get('logs/:id', (req, res => {
  res.render('/logs', {
    logs: logs[req.params.id],
  });
}));


// Listen
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });