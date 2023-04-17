
// ---------------------------------
const shoppingCart = document.getElementById('list').children;
shoppingCart[1].innerHTML = "Granny Smith Apples";

// -----------------------------------Remove 'Oat Milk' from the list

const removeOat = document.getElementById('list').children;
removeOat[3].remove();  //---selected 3rd item from list to be removed

// -----------------------------------Add an item 'Kombucha'
const newLI = document.createElement('li');
newLI.innerHTML = "Kombucha";

const list = document.querySelector('ul');
list.appendChild(newLI); 

// ------------------------------------Clear the list and programmatically add items from the array
const updatedList = ["protein bars", "almonds", "peanut butter"]; // ----Added the new/updated list items
list.innerHTML = ''; // --clearing previous content in list
updatedList.map(item => {  // ---Map method creating new array
  let updatedList1 = document.createElement('li');
  updatedList1.innerHTML = item;
  list.append(updatedList1);
});

// ------------------------------------Add the class 'important' to the almonds item.
shoppingCart[1].className = "important"; //----- reference back to #1 shoppingCart-item 1.Added className
console.log(shoppingCart); //----double checked browser shows important

