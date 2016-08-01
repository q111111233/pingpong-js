var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#calculate').submit(function(event) {
    event.preventDefault();
    var a = $('#a').val();
    var b = $('#b').val();
    var operation = $('#operation').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.calculate(parseInt(a),parseInt(b),operation);
    $('#solution').append("<li>" + output + "</li>");
  });
});
