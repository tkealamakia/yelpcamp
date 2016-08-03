var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var seedDB = require("./seeds");

seedDB();
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//Schema setup

// Campground.create(
//   {
//     name: "Salmon Creek",
//     image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
//     description: "This is awesome"
//   }, function (err, campground) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log("Newly create campground:");
//       console.log(campground);
//     }
//   });


app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      consol.log(err);
    } else {
      res.render("index", {campgrounds: allCampgrounds});
    }
  })
});

app.post("/campgrounds", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var description = req.body.description;
  var newCampground = {name: name, image: image, description: description};
  Campground.create(newCampground, function(err, newlyCreated) {
    if (err) {
        console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  })
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req, res) {
  Campground.findById(req.params.id, function(err, foundCampground) {
    if (err) {
      console.log(err);
    } else {
      res.render("show", {campground: foundCampground});
    }
  });
});

app.listen(3000, function() {
  console.log("YelpCamp has started on port 3000");
});
