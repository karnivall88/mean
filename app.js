const path          = require('path');
const cors          = require('cors');
const config        = require("./config/database");
const express       = require('express');
const mongoose      = require('mongoose')
const passport      = require('passport');
const bodyParser    = require('body-parser');


const app = express();
const user = require("./routes/users");
mongoose.connect(config.database);
mongoose.connection.on('connected', ()=>
{
console.log("Connected to the databse"+config.database);
});
app.use(cors());
app.use(bodyParser.json());
app.use("/users",user);


// Set static folder for the "front-end" Angular
app.use(express.static(path.join(__dirname,"public")));




// Server start
const port = 3000;
app.get('/',(req,res)=>{res.send("Invalid endpoint")});
app.listen(port,()=>{console.log("Server started on port: "+port)});