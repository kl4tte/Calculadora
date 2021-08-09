const express = require("express");
const app = express();

var usuarioRoute = require("./routes/calculadoraRoute");

app.use(express.json()
);

app.use(express.urlencoded(
    { extended: false })
);

app.set("view engine", "ejs");

app.use("/usuario", usuarioRoute);

app.listen("3001", function () 
    {
  console.log("Project working!");
    }
);