import { Router } from "express";
import task from "../controllers/taskController.js";

const router = Router();

router.post("/", task.createTask);
router.get("/", task.getTasks);

export default router;
