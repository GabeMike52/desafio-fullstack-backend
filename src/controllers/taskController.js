import express from "express";
import createTaskService from "../services/createTaskService.js";
import getTasksService from "../services/getTasksService.js";

const task = { createTask, getTasks };

async function createTask(req, res) {
    try {
        const { title } = req.body;
        const task = await createTaskService(title);
        res.status(201).send({ message: "Tarefa criada com sucesso!", task });
    } catch (error) {
        console.error("Erro durante a criação de uma tarefa.", error);
        res.status(400).send({ error: "Criação da tarefa falhou!" });
    }
}

async function getTasks(req, res) {
    try {
        const tasks = await getTasksService();
        res.status(200).send(tasks);
    } catch (error) {
        console.error("Erro ao buscar tarefas.");
        res.status(404).send({ error: "Nenhuma tarefa encontrada!" });
    }
}

export default task;
