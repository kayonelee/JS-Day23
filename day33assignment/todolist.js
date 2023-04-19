// When the user clicks on a list item, it is removed
function addItem(){
    var li = document.createElement("LI");  
    var input = document.getElementById("add");
    li.innerHTML = input.value;
    input.value = "";

    document.getElementById("faves").appendChild(li);
}

// // remove
// list.addEventListener('click', function(e){
//     var listItem = e.target;
//     listItem.style.cssText += "text-decoration: line-through;";
// });


// When the user clicks on a list item, it is removed
const shoppingList = document.getElementsByTagName('ul')[0];
const shoppingListItems = [... shoppingList.getElementsByTagName('li')];

for (shoppingListItem of shoppingListItems) {

  let deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.classList.add('deleteButton');
  deleteButton.textContent = ' Delete item ';
  deleteButton.addEventListener('click', (e) => e.target.parentNode.remove(), false);
  shoppingListItem.appendChild(deleteButton);
}