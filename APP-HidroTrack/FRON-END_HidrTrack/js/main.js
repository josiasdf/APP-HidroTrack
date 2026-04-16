 // 1. Captura as referências dos formulários
const loginForm = document.getElementById('loginForm');
const cadastroForm = document.getElementById('cadastroForm');

// 2. Lógica para a Tela de LOGIN
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('senha').value;

        const resultado = await realizarLogin(email, password);

        if (resultado && resultado.token) {
            alert("Login realizado com sucesso! 💧");
            localStorage.setItem('token', resultado.token);
            // window.location.href = "dashboard.html";
        } else {
            alert("Erro ao acessar: " + (resultado.error || "Verifique suas credenciais"));
        }
    });
}

// 3. Lógica para a Tela de CADASTRO
if (cadastroForm) {
    cadastroForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('senha').value; // Verifique se o ID no HTML é 'password'
        const peso = document.getElementById('peso').value;

        const resultado = await realizarCadastro(nome, email, password, peso);

        if (resultado && (resultado.message || resultado.id)) {
            // O ALERTA DE CONFIRMAÇÃO QUE VOCÊ PEDIU
            alert(`✅ CADASTRO REALIZADO!\n\nOlá ${nome}, sua meta diária calculada é de ${resultado.usuario?.meta_ml || resultado.meta_ml}ml.`);
            window.location.href = "index.html"; 
        } else {
            alert("Erro ao cadastrar: " + (resultado.error || "Tente novamente"));
        }
    });
}