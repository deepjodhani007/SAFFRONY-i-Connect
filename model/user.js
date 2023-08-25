const mongoose = require("mongoose");

const NotificationSchema = mongoose.Schema({
    title: {
      required: true,
      type: String,
    },
    date: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
  });

  const Notification = mongoose.model("Home Screen Data", NotificationSchema);

  module.exports = {
    Notification,
  };
  