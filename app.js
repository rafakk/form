const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const db = require("./db");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html');
});

app.post('/cadastro', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;

    // Valide o tamanho da senha
    if (senha.length > 6) {
        return res.send('Erro: A senha deve ter no máximo 6 caracteres.');
    }

    // Aqui você pode adicionar a lógica para salvar os dados no banco de dados, por exemplo:
    // db.insertData(nome, email, senha);

    res.send(`Dados recebidos! Nome: ${nome}, Email: ${email}, Senha: ${senha}`);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta:8080`);
});
