$(document).ready(function() {
  $("form").submit(function(event) {
    var beverageInput = $("#beverage").val();
    var iceCreamInput = $("input:radio[name=flavor]:checked").val();
    var dateInput = $("#born").val();
    var colorInput = $("#color").val();


    $(".beverage").text(beverageInput);
    $(".ice-cream").text(iceCreamInput);
    $(".date").text(dateInput);
    $(".color").text(colorInput);

    $("#answer").show();

    event.preventDefault();
  });
});
