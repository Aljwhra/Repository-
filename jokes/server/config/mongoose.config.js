const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("succesfully connected to the database"))
	.catch((err) => console.log("Failed to connect to the database "));