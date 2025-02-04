import app from "./app.js";
import ENV from "./configuration/env.js";

async function startServer() {
    try {
        const PORT = ENV.PORT;
        app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
    } catch (error) {
        console.error("Erro ao iniciar o servidor", error);
    }
}

startServer();
