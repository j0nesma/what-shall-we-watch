const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());


//Routes
var filmRoute = require("./routes/films");
app.use("/films",filmRoute);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome",
  });
});

//Swagger Setup
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "WSWW API",
      description: "This is a API for the What Shall We Watch Webpage",
      contact: {
        name: "Matthew Jones",
      },
      servers: ["http://localhost:4000"],
    },
  },
  apis: ["app.js"],
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Port setup
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

//Handle Production
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(__dirname+'/public/'))
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}
