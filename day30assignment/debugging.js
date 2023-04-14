const storeOwners = [
    {name: "charles", stores: 1 }, // ------updated
    {name: "sally", stores: 1 },
    {name: "cassandra", stores: 1 },
    {
        name: "Danny Shavez", store: 1, // ------updated
        location: "in NM",
},
];

const listNumberOfStores = function () {
    let totalLocations = 0;  // --updated 
for (let i = 0; i < storeOwners.length; i++) {
        totalLocations = totalLocations + storeOwners[i].stores; // --remove let, set total location
    }
 return totalLocations; // --removed i, updated to total locations
};

let locations = listNumberOfStores(); // ------added () & moved to be after const 

function tellMeMyStores() {
console.log("Hey, can you tell me how many stores you have?");
    if (locations > 0) {
           console.log("Of course, we have " + totalLocations + " stores");
  }
}

function hasStore() {
for (let i = 0; i < 3; i++) { // ------updated 2 to 3 for owners
        let people = storeOwners[i]; // ------added let, updated-remove objectkeys, added [i]
        let person = people.toString();
           console.log("Yes, " + people.name + " has one"); // ------updatedperson to people.name
}
}

tellMeMyStores();
hasStore();

let man = storeOwners[3]; // ------updated-remove objectkeys, added [3] owners
let mister = man.name; // ------updated

let whereHeLives = man.location; // ------updated mister to man
console.log("Yes, " + mister + " that lives " + whereHeLives + " owns one too.");
