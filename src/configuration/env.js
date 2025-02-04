import dotenv from "dotenv";

dotenv.config();

const ENV = {
    PORT: process.env.PORT || 3000,
    POSTGRES_URI: process.env.POSTGRES_URI || "",
};

if (!ENV.POSTGRES_URI) {
    throw new Error("Variáveis do ambiente não encontradas.");
}

export default ENV;
