import Task from "../models/Task.js";

async function createTaskService(title) {
    const task = new Task({ title });
    await task.save();
    return task;
}

export default createTaskService;
