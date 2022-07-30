const mongoose = require("mongoose");

const creatorSchema = mongoose.Schema({
    creatorId: {type: String, required: true},
    dateJoined: {type: String, required: true}
  }
);

const campaignsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: {
        type: String,
        required: true,
    },
    campaignName: {
      type: String,
      minlength: 1,
      maxlength: 30,
      required: true
    },
    description: {
      type: String,
      required: true,
    },
    dateCreated: {
      type: String
    },
    tags: [String],
    active: {
      type: Boolean
    },
    creators: [creatorSchema]
});

module.exports = mongoose.model("campaigns", campaignsSchema);