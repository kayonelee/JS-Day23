// --------------------------------- Get the header element
const header = document.getElementsByTagName('header');
console.log(header);
// --------------------------------- Get all the section elements    
const sectionElement = document.querySelectorAll('section');
console.log(sectionElement);   
// ---------------------------------Get the section element with class="current"
const currentSection = document.querySelector('section.current');
console.log(currentSection);

// ----------------------------------Get the section that comes after the current section
const nextSection = currentSection.nextElementSibling;
console.log(nextSection);

// ---------------------------------Get the h2 node from the section before the 'current' section
const beforeC = currentSection.previousElementSibling.lastElementChild;
console.log(beforeC);

// ---------------------------------Get the div that contains the section that has an h2 with a class of 'highlight'
const hSection = currentSection.lastElementChild.parentElement.parentElement
console.log(hSection);

// ---------------------------------Get all the sections that contain an H2 (using a single statement);
const header2Element = document.querySelectorAll('h2');
console.log(header2Element);