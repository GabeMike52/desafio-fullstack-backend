import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import { connectToPostgres } from "./configuration/db.js";

const app = express();

connectToPostgres();

app.use(express.json());
app.use(cors());
app.use("", routes);

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
};

export default app;
