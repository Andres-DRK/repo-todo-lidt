let tasks = [
    { description: "Comprar pan", completed: false },
    { description: "Estudiar JavaScript", completed: false },
    { description: "Hacer ejercicio", completed: false }
];

const taskList = document.getElementById('taskList');
const totalTasksDisplay = document.getElementById('totalTasks');
const completedTasksDisplay = document.getElementById('completedTasks');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');

function updateTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.description}</span>
            <button onclick="deleteTask(${index})">borrar</button>
            <button onclick="toggleTask(${index})">cambiar</button>
        `;
        taskList.appendChild(li);
    });
    updateCounters();
}

function updateCounters() {
    totalTasksDisplay.textContent = tasks.length;
    const completedCount = tasks.filter(task => task.completed).length;
    completedTasksDisplay.textContent = completedCount;
}

function addTask() {
    const taskDescription = taskInput.value.trim();
    if (taskDescription) {
        tasks.push({ description: taskDescription, completed: false });
        taskInput.value = '';
        updateTaskList();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
}

// Inicializar la lista de tareas al cargar
updateTaskList();

addTaskBtn.addEventListener('click', addTask);
