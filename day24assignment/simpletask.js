let taskManager = (function () {
    let tasks = [];                   // -------empty/private array
    
    function addTask(description) { 
        tasks.push(description);
     
        return addTask;
    };

    function displayTasks(){     // -Function to display all tasks-Array-----
        for (index of tasks) {   // -Iterate For of Loop, Task Array
            console.log(index);  // -Logging 
        };
    }
        return { addTask: addTask, displayTasks:displayTasks };
        
})();

taskManager.addTask("Zoom Meeting at 8AM");
taskManager.addTask("Lecture at 10:30AM");
taskManager.addTask("Lunch at 12PM");
taskManager.addTask("Standup at 1PM");

taskManager.displayTasks();       // -Logging all display tasks
