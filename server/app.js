const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());


//Routes
var filmRoute = require("./src/routes/films");
var imdbRoute = require("./src/routes/imdb");

app.use("/api/films",filmRoute);
app.use("/api/imdb", imdbRoute);

//Port setup
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
app.use(express.static(__dirname+'/public/'))
//Handle Production
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(__dirname+'/public/'))
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}
