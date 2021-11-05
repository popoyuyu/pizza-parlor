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
  for (let i = 0; i < this.length; i++) {
    this.price += 1;
  }
}

const myPizza = new Pizza("medium", ["anchovies"]);
