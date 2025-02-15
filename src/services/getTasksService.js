import Task from "../models/Task.js";

function getTasksService() {
    const tasks = Task.findAll();
    return tasks;
}

export default getTasksService;
