var express = require('express');
var app = express();
var router = express.Router();
var PORT= process.env.PORT || 3000;

app.use(express.static(__dirname + "../public"));

app.use(router);
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(PORT, function(){
    console.log("listening on port:"+ PORT);
});