require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const Logs = require("./models/logs");
const { connect, connection } = require("mongoose");
const methodOverride = require("method-override");


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
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specify the views directory everytime we use the render method
app.set('views', './views');

//Middleware
app.use(express.urlencoded({ extended: false }));
//configure method-override
app.use(methodOverride('_method'));
//configure public folder
app.use(express.static("public"));


// Custom Middleware
app.use((req, res, next) => {
  console.log('Middleware running...');
  next();
});

//Index
app.get('/', async (req, res) => {
console.log('Index Controller Func. running...');
  try {
    const foundLogs = await Logs.findById({});
    res.render('logs', { logs: foundLogs });
   } catch (err) {
    res.status(400).send(err);
  }
});
/*app.get('/', (req, res) => {
res.send('logs/Index')
});*/

//New
app.get('/logs/new', (req, res) => {
  res.render('logs/New');
});

//Delete
app.delete('/:id', async (req, res) => {
  try {
    await Logs.findByIdAndDelete(req.params.id)
    res.redirect('/logs');
  } catch (err) {
      res.status(400).send(err);
  }
})

//Update(PUT)
app.put('/:id', async (req, res) => {
  try {
  req.body.shipIsBroken = req.body.shipIsBroken === 'on';
  const updatedLogs = await Logs.findByIdAndUpdate(req.params.id, req.body, {new: true});
  console.log(updatedLogs)
  res.send(`/logs/${req.params.id}`)
  } catch (err) {
   res.status(400).send(err);
  }
});

//Create
app.post('/', async (req, res) => {
  try {
    req.body.shipIsBroken = req.body.shipIsBroken === "on";
    const newLogs = await Logs.create(req.body);
    console.log(newLogs)
    res.redirect('/logs/');
  } catch (err) {
    res.status(400).send(err);
  }
});

/*app.post('/logs', (req, res) => {
  req.body.logs = req.body.logs === 'true/false';
  logs.push(req.body);
  
  res.send(req.body);
});*/


//Edit
app.get('/:id/edit', async (req, res) => {
  try {
  const foundLogs = await Logs.findById(req.params.id);
  res.send("logs/Edit", {
    logs: foundLogs
  });
  } catch (err) {
    res.status(400).send(err)
  }
});


//Show
app.get('/:id', async (req, res) => {
  try {
    const foundLogs = await Logs.findById(req.params.id);
  res.render('logs/Show', {
    //second param must be an object
    logs: foundLogs,
    //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  });
} catch (err) {
  res.status(400).send(err);
}
});

/*app.get('/logs/:id', (req, res) => {
  res.send('logs/Show', {
    logs: logs[req.params.id],
  });
});*/


// Listen
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });