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
          tags: [{
            type: String,
          }],
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

module.exports = mongoose.model("campaigns", campaignsSchema);