import app from "./app.js";

const PORT = process.env.PORT || 4000

// escutar porta 4000
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
})