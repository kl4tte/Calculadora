const mongoose = require("mongoose");

const uri = "mongodb+srv://Calculadora:Calculadora@cluster0.fdsx6.mongodb.net/test";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useFindAndModify", false);

module.exports = mongoose;