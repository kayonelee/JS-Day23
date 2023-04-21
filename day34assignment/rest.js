const resultstextarea = document.getElementById("results");

//gets all posts
function getAllPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(
        function (response) {
        return response.json();
    }).then(
        function (json) {
        resultstextarea.value = JSON.stringify(json, null, " ")
    });
}

// Get post id with 10
function getPost10 () {
    fetch("https://jsonplaceholder.typicode.com/posts/10")
    .then(
        function (response) {
        return response.json();
    }).then(
        function (json) {
        resultstextarea.value = JSON.stringify(json, null, " ")
    });
}

//Create a new post and log the id generated for it by the server
function createPost() {
    fetch("https://jsonplaceholder.typicode.com/posts/", {
            method: 'POST',
            body: JSON.stringify({
              title: 'foo',
              body: 'bar',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        .then(response => response.json())
        .then(json => {
            resultstextarea.value = "ID " + json.id;
        });
}

//Replace Post 12
function replacePost12() {
    fetch("https://jsonplaceholder.typicode.com/posts/12", {
            method: 'PUT',
            body: JSON.stringify({
              id: 12,
              title: 'New Title',
              body: 'New Body',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
          .then(response => response.json())   
        .then(json => {
            resultstextarea.value = "ID " + json.id;
    })
}

//Update Title Post 12
function updateTitlePost12() {
    fetch("https://jsonplaceholder.typicode.com/posts/12", {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'FOO',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

//Delete the post with id of 12 and ...
function deletePost12() {
    fetch('https://jsonplaceholder.typicode.com/posts/12', {
        method: 'DELETE',
    })
    .then((response) => response.json())
    .then(json => {
    resultstextarea.value = "Success!"; //render a success message
    })
    .then((json) => console.log(json));
}

// ---http://jsonplaceholder.typicode.com/guide/