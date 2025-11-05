const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  like: { type: Number, required: true },
  comment: { type: String, required: true },
  username:{type:String,required:true}
});

module.exports = mongoose.model("blog", postSchema);
