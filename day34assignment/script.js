const users = [   //----- Create an array of user objects called users.(ID,NAME,EMAIL)
    { id: 1, name: "Tommy Tomi", email: "TT1@yahoo.com" },
    { id: 2, name: "Kelly Kelli", email: "KK1@yahoo.com" },
    { id: 3, name: "Aaron Erin", email: "EE1@yahoo.com" },
    { id: 4, name: "John Jon", email: "JJ1@yahoo.com" },
  ];
   
    //-----
    function fetchUserById(id) {
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            const user = users.find(function(user) {
              return user.id == id;
            });
            if (user) {
              resolve(user);
            } else {
              reject("User rejected / Not found");
            }
          }, 1000);
        });
      }


    // Use the fetchUserById function to fetch the user with ID 1
    fetchUserById(1)
    .then(function(user) {
        console.log(user);
    })
    .catch(function(error) {
        console.log(error);
    });

    // The promise rejects with an error message when the user with the given ID does not exist in the users array
    fetchUserById(9)    // plugged a non-existence user
    .then(function(user) {
        console.log(user);
    })
    .catch(function(error) {
        console.log(error);
    });

    