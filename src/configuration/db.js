import { Sequelize } from "sequelize";
import ENV from "./env.js";

const uri = ENV.POSTGRES_URI;
const sequelize = new Sequelize(uri);

async function createDatabase() {
    try {
        const tempSequelize = new Sequelize(
            `postgres://${ENV.POSTGRES_USER}:${ENV.POSTGRES_PASSWORD}@localhost:5432`
        );

        await tempSequelize.authenticate();

        const dbName = ENV.POSTGRES_DATABASE;
        const [result] = await tempSequelize.query(
            `SELECT 1 FROM pg_database WHERE datname = '${dbName}'`
        );

        if (result.length === 0) {
            await tempSequelize.query(`CREATE DATABASE ${dbName}`);
        }

        await tempSequelize.close();
    } catch (error) {
        console.error("Erro ao criar banco de dados: ", error);
    }
}

async function connectToPostgres() {
    try {
        await createDatabase();
        await sequelize.authenticate();
        await sequelize.sync({ force: false });
        console.log("Conexão com o Postgres estabelecida com sucesso.");
    } catch (error) {
        console.error("Conexão com o banco falhou.", error);
    }
}

export { connectToPostgres, sequelize };
