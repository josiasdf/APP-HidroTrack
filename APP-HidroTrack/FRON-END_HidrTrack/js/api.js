const API_URL = "http://localhost:3000"; // A porta onde seu servidor Node está rodando [cite: 25]

async function realizarLogin(email, senha) {
    try {
        const response = await fetch(`${API_URL}/usuarios/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha })
        });
        return await response.json();
    } catch (error) {
        console.error("Erro na conexão com a API:", error);
    }
}
async function realizarCadastro(nome, email, senha, peso) {
    try {
        const response = await fetch(`${API_URL}/usuarios/cadastro`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, senha, peso })
        });
        return await response.json();
    } catch (error) {
        console.error("Erro ao cadastrar:", error);
    }
}