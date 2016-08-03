var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Cloud's Rest",
    image: "https://images.theoutbound.com/uploads/1437140402255/wumsmrfw78e/ca76c0961beec40ee34c0e8b7997e543?w=900&h=600&fit=crop",
    description: "This is a great description"
  },
  {
    name: "Raven's Retreat",
    image: "http://cdn.phillymag.com/wp-content/uploads/2014/05/MO-be-well-camping-tom-bean-getty.jpg",
    description: "This is a great description"
  },
  {
    name: "Autumn Grove",
    image: "http://www.outpostusa.org/Backpacking/Cumberland%20Gap/Cumberland%20Gap%20pix/CGap37.jpg",
    description: "This is a great description"
  },
]
function seedDB() {
  Campground.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log("removed campgrounds!");
    data.forEach(function(seed) {
      Campground.create(seed, function(err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log("added a campground");
          Comment.create(
            {
              text: "This place is great, but I wish there was internet",
              author: "Homer"
            }, function(err, comment) {
                if (err) {
                  console.log(err);
                } else {
                  campground.comments.push(comment);
                  campgrounds.save();
                  console.log("Create new comment");
                }
            });
        }
      });
    });
  });
}


module.exports = seedDB;
