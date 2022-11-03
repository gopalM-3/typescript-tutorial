localStorage.setItem("taskId", "0");

type Task = {
    id: number;
    title: string;
    completion: boolean;
    createdAt: Date;
};

const list = document.querySelector<HTMLOListElement>("#list");
const form = document.querySelector<HTMLFormElement>("#form");
const input = document.querySelector<HTMLInputElement>("#title");

const tasks: Task[] = getTasks(); // getting any pre-existing tasks from localStorage
tasks.forEach(renderTask); // rendering pre-existing tasks, if any

form?.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value == "") return;
    const newTask: Task = {
        id: localStorage.getItem("taskId") as unknown as number,
        title: input.value,
        completion: false,
        createdAt: new Date(),
    };
    tasks.push(newTask);
    saveTask();
    renderTask(newTask);
    localStorage.setItem(
        "taskID",
        ((localStorage.getItem("taskId") as unknown as number) +
            1) as unknown as string
    );
    input.value = "";
});

form?.addEventListener("reset", (e) => {
    e.preventDefault();
    input.value = "";
});

function renderTask(task: Task): void {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completion;
    checkbox.addEventListener("change", () => {
        task.completion = checkbox.checked;
        console.log(tasks);
    });
    label.append(checkbox, task.title);
    li.append(label);
    list?.append(li);
}

function getTasks(): Task[] {
    const taskJSON = localStorage.getItem("Tasks");
    if (taskJSON == null) return [];
    return JSON.parse(taskJSON);
}

function saveTask(): void {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
}
