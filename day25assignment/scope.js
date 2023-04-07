function outer(){                    // ---OUTER scope
  let a = "Bob"                      // ---String
  let b = {Food: "Pizza"}            // ---Object
    
    function inner (a , b) {         // ---INNER two parameters named a and b
        a = "Mike"                   // ---Assigning new string
        b = {FavoritePizza: "Cheese"}  // ---Assigning new object-also updated property to favoriteFood
        console.log(a)               // --Logging a at the end of the function
        console.log(b)               // --Logging b at the end of the function
    }
    inner(a,b);
    console.log(a)                   // --Logging a after the a,b inner parameter
    console.log(b)                   // --Logging b after the a,b inner parameter
}
outer();

    