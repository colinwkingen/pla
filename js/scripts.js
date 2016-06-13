//business logic
function Place(name, location, date, currency) {
  this.placeName = name;
  this.locationName = location;
  this.dateVisited = date;
  this.currency = currency;
};

Place.prototype.fullPlace = function() {
  return this.placeName + ", " + this.locationName;
};

// user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedPlaceName = $("input#new-place-name").val();
    var inputtedLocationName = $("input#new-location-name").val();
    var inputtedDateVisited = $("input#date-visited").val();
    var inputtedCurrency = $("input#currency").val();

    var newPlace = new Place(inputtedPlaceName, inputtedLocationName, inputtedDateVisited, inputtedCurrency);

    $("ul#places").append("<li><span class='place'>" + newPlace.fullPlace() + "</span></li>");

    $("input#new-place-name").val("");
    $("input#new-location-name").val("");
    $("input#date-visited").val("");
    $("input#currency").val("");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.fullPlace());
      $(".place-name").text(newPlace.placeName);
      $(".location-name").text(newPlace.locationName);
      $(".date-visited").text(newPlace.dateVisited);
      $(".currency").text(newPlace.currency);
    });
  });
});
