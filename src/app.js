import express from "express";
import cors from "cors";
//import routes from "./routes";
import connectToPostgres from "./configuration/db.js";

const app = express();

connectToPostgres();

app.use(express.json());
app.use(cors());

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
};

export default app;
