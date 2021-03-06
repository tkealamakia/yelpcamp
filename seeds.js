var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Cloud's Rest",
    image: "https://images.theoutbound.com/uploads/1437140402255/wumsmrfw78e/ca76c0961beec40ee34c0e8b7997e543?w=900&h=600&fit=crop",
    description: "Pancetta andouille cupim, sausage spare ribs turkey pork loin pork strip steak short ribs ball tip brisket. Shoulder jerky pork chop frankfurter strip steak pork loin chicken bresaola tenderloin brisket rump boudin kielbasa. Pork loin ball tip meatball sirloin, t-bone picanha swine pig. Shank rump meatloaf swine pancetta, jowl capicola. Cupim pork belly andouille cow shoulder. Shoulder drumstick ham, tail meatball rump brisket ground round turducken."
  },
  {
    name: "Raven's Retreat",
    image: "http://cdn.phillymag.com/wp-content/uploads/2014/05/MO-be-well-camping-tom-bean-getty.jpg",
    description: "Pancetta andouille cupim, sausage spare ribs turkey pork loin pork strip steak short ribs ball tip brisket. Shoulder jerky pork chop frankfurter strip steak pork loin chicken bresaola tenderloin brisket rump boudin kielbasa. Pork loin ball tip meatball sirloin, t-bone picanha swine pig. Shank rump meatloaf swine pancetta, jowl capicola. Cupim pork belly andouille cow shoulder. Shoulder drumstick ham, tail meatball rump brisket ground round turducken."
  },
  {
    name: "Autumn Grove",
    image: "http://www.outpostusa.org/Backpacking/Cumberland%20Gap/Cumberland%20Gap%20pix/CGap37.jpg",
    description: "Pancetta andouille cupim, sausage spare ribs turkey pork loin pork strip steak short ribs ball tip brisket. Shoulder jerky pork chop frankfurter strip steak pork loin chicken bresaola tenderloin brisket rump boudin kielbasa. Pork loin ball tip meatball sirloin, t-bone picanha swine pig. Shank rump meatloaf swine pancetta, jowl capicola. Cupim pork belly andouille cow shoulder. Shoulder drumstick ham, tail meatball rump brisket ground round turducken."
  },
]
function seedDB() {
  Campground.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log("removed campgrounds!");
    data.forEach(function(seed) {
      Campground.create(seed, function(err, campground) {
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
                  campground.save();
                  console.log("Create new comment");
                }
            });
        }
      });
    });
  });
}


module.exports = seedDB;
