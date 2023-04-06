let taskManager = (function() {
    #tasks = [];                   // -------empty array the # sign makes it private
    
function addTask(thisisadescription) {
    tasks.push(thisisadescription)
} 

addTask("Zoom Meeting at 8am");
addTask("Lecture at 10:30AM");

console.log(tasks);
  })();