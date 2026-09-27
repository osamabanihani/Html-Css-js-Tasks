let inputText = document.getElementById("inputText");
let addButton = document.getElementById("addButton");
let listTask = document.getElementById("listTask");
let arr = JSON.parse(localStorage.getItem("task")) || [];

function displayTasks() {
    listTask.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
    listTask.innerHTML +="<p>" +arr[i] +" <button onclick='deleteTask(" + i + ")'>Delete</button>" +"</p>";
    }
}
displayTasks();

addButton.onclick = function() {
    let task = inputText.value;
    if (task != "") {
        arr.push(task);
        localStorage.setItem("task", JSON.stringify(arr));
        displayTasks();
        inputText.value = "";
    }
};

function deleteTask(index) {
    arr.splice(index, 1);
    localStorage.setItem("task", JSON.stringify(arr));
    displayTasks();
}