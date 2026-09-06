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

        // create a new list element
        const li = document.createElement("li");

        // add a class to the list element if the task is completed
        if (task.completed) {
            li.classList.add("completed");
        };

        // create Done button
        const doneButton = document.createElement("button");
        doneButton.textContent = "Done";

        // add event listener to the Done button
        doneButton.addEventListener("click", () => {
            // mark the task as completed
            task.completed = !task.completed;

            renderTasks();
        });

        // set new element's text content to the task name
        li.textContent = task.name + " - " + task.priority;

        // append the Done button to the list item
        li.appendChild(doneButton);

        taskList.appendChild(li);

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
    // trim(): remove whitespace from the beginning and end of the string
    const inputValue = taskForm.querySelector("#task-input").value.trim();

    // get the value of the priority field
    const inputPriority = taskForm.querySelector("#priority").value;

    // check if the input value is empty
    if (inputValue === "") {
        // use the pop up alert to tell the user that they need to enter a task name
        alert("Empty task name! Please enter a task name.");
        return;
    }

    // create a new task object
    const newTask = {
        name: inputValue,
        priority: inputPriority,
        completed: false
    };

    // push into the task array
    allTasksList.push(newTask);

    // clear the input field
    taskForm.querySelector("#task-input").value = "";


    renderTasks();
});
