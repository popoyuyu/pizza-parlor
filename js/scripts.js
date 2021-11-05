//Business Logic
function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
  this.price = 0;
}

const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
