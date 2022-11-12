"use strict";

var mongoose = require("mongoose");
Subs = mongoose.model("Subs");

exports.get_all_subscriptions = function (req, resp) {
  Subs.find({}, function (err, result) {
    if (err) resp.send(err);
    resp.json(result);
  });
};

exports.add_subscription = function (req, resp) {
  var new_sub = new Subs(req.body);
  new_sub.save(function (err, result) {
    if (err) resp.send(err);
    resp.json(result);
  });
};

// exports.get_a_subcription = function(req, resp) {
//     Subs.findById(req.paramas.subId, function(err, sub) {
//       if (err)
//         resp.send(err);
//       resp.json(sub);
//     })
// };
