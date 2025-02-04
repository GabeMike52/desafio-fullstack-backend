import { Sequelize } from "sequelize";
import ENV from "./env.js";

const uri = ENV.POSTGRES_URI;

async function connectToPostgres() {
    try {
        const sequelize = new Sequelize(uri);
        await sequelize.authenticate();
        console.log("Conexão com o Postgres estabelecida com sucesso.");
    } catch (error) {
        console.error("Conexão com o banco falhou.", error);
    }
}

export { connectToPostgres, sequelize };
