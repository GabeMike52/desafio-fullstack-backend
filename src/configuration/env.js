import dotenv from "dotenv";

dotenv.config();

const ENV = {
    POSTGRES_URI: process.env.POSTGRES_URI || "",
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE || "",
    POSTGRES_USER: process.env.POSTGRES_USER || "",
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || "",
};

if (!ENV.POSTGRES_URI || !ENV.POSTGRES_DATABASE || !ENV.POSTGRES_USER || !ENV.POSTGRES_PASSWORD) {
    throw new Error("Variáveis do ambiente não encontradas.");
}

export default ENV;
