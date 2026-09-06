console.log("js connected");


// Create a task array
const allTasksList = [
    // Task 1
    {
        name: "shopping",
        priority: "low",
        completed: false
    },

    // Task 2
    {
        name: "do homework",
        priority: "high",
        completed: false
    }
];

// render the tasks in the task list
function renderTasks() {
    // # mean ID is: 
    const taskList = document.querySelector("#task-list")

    // clear the task list
    taskList.innerHTML = "";

    for (let i = 0; i < allTasksList.length; i++) {
        // select item
        const task = allTasksList[i];
        
        // create a new element
        const item = document.createElement("li");
        
        // set new element's text content to the task name
        item.textContent = task.name + " - " + task.priority;

        taskList.appendChild(item);

        // show the task list in the console
        // console.log(taskList);
    }
};


// select task form
const taskForm = document.querySelector("#task-form");

// listener
taskForm.addEventListener("submit", (event) => {
    // need this one to keep the page from refreshing when the form is submitted
    event.preventDefault();
    
    // get the value of the input field
    const inputValue = taskForm.querySelector("#task-input").value;

    // remove whitespace from the beginning and end of the string
    inputValue.trim(); 

    
    // get the value of the priority field
    const inputPriority = taskForm.querySelector("#priority").value;

    // remove whitespace from the beginning and end of the string
    inputPriority.trim();

    if (inputValue === "") {
        // use the pop up alert to tell the user that they need to enter a task name
        alert("Empty task name! Please enter a task name.");
        return;
    }

    // create a new task object
    const new_task = {
        name: inputValue,
        priority: inputPriority,
        completed: false
    };

    // push into the task array
    allTasksList.push(new_task);

    renderTasks();
});
