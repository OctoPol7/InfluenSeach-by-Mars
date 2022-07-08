const mongoose = require("mongoose");

const creatorSchema = mongoose.Schema({
    creatorId: {type: String, required: true},
    // pictureUrl: {type: String},
    // creatorName: {type: String, required: true},
    dateJoined: {type: Date, required: true},
    // videoUploads: {type: Number},
    // subscribers: {type:Number},
    // tags: [String]
  }
);

const campaignsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userName: {
        type: String,
        required: true,
    },
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
    creators: [creatorSchema]
});

module.exports = mongoose.model("campaigns", campaignsSchema);