import { Router } from "express";
import taskRoutes from "./taskRoutes.js";

const router = Router();

router.use("/tarefas", taskRoutes);

export default router;
