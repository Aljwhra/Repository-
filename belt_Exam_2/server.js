const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true }));
require('./server/routes/pets.routes')(app);
require('./server/config/mongoose.config');
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})