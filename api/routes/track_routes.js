"use strict";

module.exports = function (app) {
  var subscriptions = require("../controllers/track_controller");

  app
    .route("/subs")
    .get(subscriptions.get_all_subscriptions)
    .post(subscriptions.add_subscription);

  // app
  //   .route("/subs/:subId")
  //   .get(subscriptions.get_a_subcription)
  //   .put(subscriptions.update_a_subscription)
  //   .delete(subscriptions.delete_a_subscription);
};
