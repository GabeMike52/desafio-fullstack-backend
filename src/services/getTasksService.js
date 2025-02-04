import Task from "../models/Task.js";

async function getTasksService() {
    const tasks = await Task.findAll();
    return tasks;
}

export default getTasksService;
