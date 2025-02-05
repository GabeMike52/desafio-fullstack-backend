import app from "./app.js";

async function startServer() {
    try {
        const PORT = 3600;
        app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
    } catch (error) {
        console.error("Erro ao iniciar o servidor", error);
    }
}

startServer();
