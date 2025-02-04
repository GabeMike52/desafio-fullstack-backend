import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(express.json);
app.use(cors());

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
};

export default app;
