const mongoose = require("mongoose");


const campaignsSchema = mongoose.Schema({
  campaignName: {
      type: String,
      minlength: 1,
      maxlength: 30,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    dateCreated: {
      type: Date
    },
    tags: [String],
    active: {
      type: Boolean
    },
    creators: [{
      creatorId: {type: String, required: true},
      pictureUrl: {type: String},
      creatorName: {type: String, required: true},
      dateJoined: {type: Date, required: true},
      videoUploads: {type: Number},
      subscribers: {type:Number},
      tags: {type:String}
    }]
});


const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userName: {
    type: String,
    minlength: 1,
    maxlength: 30,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: { type: String, required: true },
  campaigns: [campaignsSchema]
});

module.exports = mongoose.model("User", userSchema);
