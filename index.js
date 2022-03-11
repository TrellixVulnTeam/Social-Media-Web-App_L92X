const express = require('express');
const cookieParser = require('cookie-parser');
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

const app = express();

app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(expressLayouts);
//use express router
app.use('/',require('./routes'));


//extract style and scripts from subpages into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.set('view engine','ejs');
app.set('views','./views'); 

app.listen(port,function(err){
    if(err){
    // console.log("ERROR :" , err);
    console.log(`Error in running : ${err}`);
    return;
    }
    console.log(`Server is running on port : ${port}`);
});