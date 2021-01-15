const express = require("express");
const app = express();

app.use(express.static("/Users/kevinjuanjacquecastillo/Desktop/ripley/para-romper/build"));
app.listen(2000,()=>{
    console.log(express.static(__dirname.toString().replace("publicstrapi","build")))
    console.log('escuchando por el puerto 2000')
});