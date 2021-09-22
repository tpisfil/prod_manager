const express = require("express");
const cors = require("cors")
const app = express();
const port = 8000; 

app.use( express.json() ); //tells my app that it can parse json
app.use( express.urlencoded({ extended: true }) ); //tells my app that it can gather form information 
app.use( cors() );

require("./server/config/product.config")
require("./server/routes/product.routes")(app)

//this always goes at the END
app.listen( port, () => console.log(`Listening on port: ${port}`) );