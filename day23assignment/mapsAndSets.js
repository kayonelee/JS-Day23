let fruitInventory = new Map();
fruitInventory.set("apple",10);
fruitInventory.set("banana",20);
fruitInventory.set("orange",30);
console.log(fruitInventory);

console.log(fruitInventory.get("apple"));
fruitInventory.set("apple", 15);             // this updates apple inventory from 10 to 15
console.log(fruitInventory.get("apple"));
console.log(fruitInventory);

console.log(fruitInventory.get("banana"));   // this retrieves banana inventory

let bananaInventory = fruitInventory.get("banana")
console.log( "this is the banana inventory value " + bananaInventory);    

let uniqueColors  = new Set();
uniqueColors.add("red");
uniqueColors.add("blue");
uniqueColors.add("green");
console.log(uniqueColors);

uniqueColors.add("Yellow");      // Adding yellow to uniqueColors
console.log(uniqueColors);       // double checking-node is good

let hasBlue = uniqueColors.has("blue");
console.log(hasBlue);  // checking to see if blue is in uniqueColors-node is good/true


