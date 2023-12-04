const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
	user: { type:mongoose.Schema.Types.ObjectId },
    title: {type:String, },
	image: { type: String},
	video: { type: String},
	like: { type: Array, default: 0},
	dislike: { type: Array,default: 0},
    comment: {
        user: {
            type: mongoose.Schema.ObjectId,
            
        },
        email: {
            type: String,
          
        },
        profile: {
            type: String
        },
        comment: {
            type: String,
           
        }
    }
});


module.exports = mongoose.model("post", postSchema );
