const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "name is required"],
		minlength:[3,"name min length is 3"],
        unique: [true, "name must be unique"]
        
	},

	type:{
        type: String,
        required: [true, "type is required"],
        minlength:[3,"type min length is 3"]
    },

	
	 description: {
        type: String,
         required: [true, " description is required"],
         minlength: [3, "description must be at least 3 characters long"]
        
    },

	
	skill1: {
        type: String,
      
    },

    skill2:{
     type: String
    },

    skill3:{
     type: String
    }


});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;