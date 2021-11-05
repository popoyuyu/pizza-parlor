//Business Logic

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.price = 0;
}

Pizza.prototype.sizeCost = function () {
  if (this.size === "small") {
    this.price += 10;
  } else if (this.size === "medium") {
    this.price += 12;
  } else if (this.size === "large") {
    this.price += 15;
  }
}

Pizza.prototype.toppingCost = function () {
  for (let i = 0; i < this.topping.length; i++) {
    this.price += 1;
  }
}

//User Interface Logic

$(document).ready(function () {
  $("#pizza").submit(function (e) {
    e.preventDefault();
    const inputtedSize = $("select#size").val();
    const inputtedTopping = $("checkbox.topping");
    let totalCost = this.sizeCost + this.toppingCost;
    let myPizza = new Pizza(inputtedSize, inputtedTopping, totalCost);
    myPizza.toppingCost();
    $("#total-cost").html(myPizza.price);
  });
});