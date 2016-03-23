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

  $("#date").click(function(event) {
    var tdate = new Date();
    var dd = tdate.getDate(); //yields day
    var MM = tdate.getMonth(); //yields month
    var yyyy = tdate.getFullYear(); //yields year
    var xxx = ( MM+1) + "-" + dd + "-" + yyyy;

    $(".beverage").text(beverageInput);


  });


});
