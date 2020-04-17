const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  phoneNumber: {
    type: Number,
    required: [true, "Please provide your phone number!"],
    unique: false,
    trim: true,
    maxlength: [13, "Phone number too long!"],
  },

  name: {
    type: String,
    required: [true, "Please provide your name!"],
    unique: false,
    trim: true,
    maxlength: [30, "Name too long!"],
  },

  location: {
    type: String,
    required: [true, "Please provide your location!"],
    unique: false,
    trim: true,
    maxlength: [50, "Location too long!"],
  },

  want: {
    type: String,
    required: [true, "Please let us know what you want!"],
    unique: false,
    trim: true,
    maxlength: [100, "Text too long!"],
  },

  offer: {
    type: String,
    required: [true, "Please let us know what you are offering in exchange!"],
    unique: false,
    trim: true,
    maxlength: [100, "Text too long!"],
  }
});

mongoose.models = {};
module.exports = mongoose.model.Posts || mongoose.model("Posts", PostSchema);
