import Task from "../models/Task.js";

async function getTasks() {
    const tasks = await Task.findAll();
    return tasks;
}

export default getTasks;
