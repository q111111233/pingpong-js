function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.calculate = function(a,b,operation) {
  var output = 0;

  if (operation === "+") {
    output = a+b;
  } else if (operation === "-") {
    output = a-b;
  } else if (operation === "*") {
    output = a*b;
  }  else if (operation === "/") {
    output = a/b;
  }else  {
    return "enter a valid value";
  }
  return output;
};


exports.calculatorModule = Calculator;
