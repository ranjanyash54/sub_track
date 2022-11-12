"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SubscriptionShema = new Schema({
  name: {
    type: String,
  },
  url: {
    type: String,
  },
  cost: {
    type: Number,
  },
  end_data: {
    type: Date,
    default: Date.now,
  },
  // Add subscription cycle type.
});

module.exports = mongoose.model("Subs", SubscriptionShema); // Used to export this schema so that it can be used at other places
