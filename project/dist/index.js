localStorage.setItem("taskId", "0");
var list = document.querySelector("#list");
var form = document.querySelector("#form");
var input = document.querySelector("#title");
var tasks = getTasks(); // getting any pre-existing tasks from localStorage
tasks.forEach(renderTask); // rendering pre-existing tasks, if any
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value == "")
        return;
    var newTask = {
        id: localStorage.getItem("taskId"),
        title: input.value,
        completion: false,
        createdAt: new Date()
    };
    tasks.push(newTask);
    saveTask();
    renderTask(newTask);
    localStorage.setItem("taskID", (localStorage.getItem("taskId") +
        1));
    input.value = "";
});
form === null || form === void 0 ? void 0 : form.addEventListener("reset", function (e) {
    e.preventDefault();
    input.value = "";
});
function renderTask(task) {
    var li = document.createElement("li");
    var label = document.createElement("label");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completion;
    checkbox.addEventListener("change", function () {
        task.completion = checkbox.checked;
        console.log(tasks);
    });
    label.append(checkbox, task.title);
    li.append(label);
    list === null || list === void 0 ? void 0 : list.append(li);
}
function getTasks() {
    var taskJSON = localStorage.getItem("Tasks");
    if (taskJSON == null)
        return [];
    return JSON.parse(taskJSON);
}
function saveTask() {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
}
