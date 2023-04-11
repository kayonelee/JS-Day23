function Person ( firstName, lastName, favoriteColor, favoriteNumber , favoriteFoods)   {
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = favoriteFoods;
    this.family = []  // -------added family property-empty array
}

// --  added fullName function to person prototype
Person.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
};

// --toString method overwrite
Person.prototype.toString = function () {
    return this.firstName + " " + this.lastName + ", Favorite Color: " + this.favoriteColor + ", Favorite Number: " + this.favoriteNumber;
};

// -----added addToFamily function   
Person.prototype.addToFamily = function (person) {
    if(person instanceof Person && !this.family.includes(person))   {  // -----instanceof tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object
    this.family.push(person);
    }
    return this.family.length;
};

let bob = new Person("Bob", "Smith", "Yellow", 20, ["steak", "pizza"]);
let charles = new Person("Charles", "Doe", "Black", 30, ["bread", "bananas"]);
let david = new Person("David", "Whitt", "Purple", 40, ["grapes", "sub"]);
let edward = new Person("Edward", "Lee", "Green", 50, ["salad", "rice"]);

console.log(bob.fullName());
console.log(bob.toString());   // ---Bob Smith, Favorite Color: Yellow, Favorite Number: 20
console.log(bob.addToFamily(charles));
console.log(bob.addToFamily(david));
console.log(bob.addToFamily(edward));
console.log(bob.family);