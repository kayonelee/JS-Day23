const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

// ----Find a user named 'Jose'Single item-Find Array
const findUser = users.find((user) => user.firstName == "Jose");
console.log("Find information for Jose:")
console.log(findUser) // --double checked-it does run Jose in the terminal


// ----Get an array of all the premium members-Filter Array
const premiumMembers = users.filter((premium) => premium.isPremiumMember === true);
console.log("Premium Members: ")
console.log(premiumMembers) // --double checked-it does run elijah and ted premium members in the terminal


// ----Get an array of all the user last names- Map Array
const lastNames = users.map((last) => last.lastName);
console.log("Last Name for all users: ")
console.log(lastNames)  // --double checked-it does run all eight last names in the terminal


// ----Get an array of the full names who have logged in more than 10 times-Filter and Map Array
const tenPlusLogin = users.filter((login) => login.logins > 10);
const nameOfLogins =tenPlusLogin.map((names) => names.firstName+ " " + names.lastName);
console.log("Users with login over 10 times: ")
console.log(nameOfLogins) // --double checked-it does run FN & LN for logins over 10 


// ----Get the total number of logins for the list of users-Map and Reduce Array to calculate
const numberOfLogins = users.map ((loginamount) => loginamount.logins);
const totalLogins = numberOfLogins.reduce(function(logins, total)   {
    return total + logins;
});
console.log("Total Login count: " + totalLogins) // --double checked-it does run total login sum 156

