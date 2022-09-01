const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "name is required"],
		minlength:[3,"name min length is 3"]
	},

	image:{
        type: String
        ,required: [true, "Image is required"]
    },

	treasure_chests: {
		type: Number,
		required:[true, "Treasure chests is required"],
		min:[0,"Treasure chests min Treasure chests is 1"]
	},
	 catch_phrase: {
        type: String,
         required: [true, "Catch Phrase is required"],
         minlength: [3, "Catch Phrase must be at least 3 characters long"]
        
    },

	 hook_hand: {
        type: Boolean,
         required: [true, "Yes or No please"]
    },

     eye_patch: {
        type: Boolean,
         required: [true, "Yes or No please"]
    },

     peg_leg: {
        type: Boolean,
         required: [true, "Yes or No please"]
    },
	crew_position: {
        type: String,
         required: [true, "Crew Position is required"],
         minlength: [3, "Crew Position must be at least 3 characters long"]
       
    }

});

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;