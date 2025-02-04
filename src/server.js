import app from "./app";
import ENV from "./configuration/env";

const PORT = ENV.PORT;

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
