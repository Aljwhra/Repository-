const express = require("express");
// const cors = require('cors');

const app = express();
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./server/routes/mongoose.routes')(app);
require('./server/config/mongoose.config'); 


app.listen(8000 ,() =>{ 
    console.log ("our appliction is running on port 8000")
})