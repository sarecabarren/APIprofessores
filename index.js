const express = require('express')
const app = express()
 
app.use(express.json())
 
const alunos = [
    {
        id: 1,
        nome: "Melissa Borba",
        email:"mellb@gmail.com"
    },
    {
        id: 2,
        nome: "João Henrique",
        email:"jhenrique@gmail.com"
    },
    {
        id: 3,
        nome: "Miguel Leite",
        email:"miguell@gmail.com"
    },
    {
        id: 4,
        nome: "artur sperati",
        email: "a.sperati@gmail.com"
    }
]
 
app.get("/", function(req, res){
    res.send("Hello Word! Você conseguiu!")
})
 
app.get("/alunos", function(req, res){
    const nome = req.query .nome
   
    // se não passar query param,retorna todos
    // o ponto de exclamação inverte o valor
    // se o nome não tiver valor ele é falso mas por conta do
    // sinal de exclamação ele vira verdadeiro e exercuta o que esta no if

    if("!nome"){
        return res.json(alunos)
    }
    const alunosFiltrados = alunos.filter(a => 
        a.nome.toLowerCase().includes (nome.toLowerCase())
    )

    res.json(alunosFiltrados)
})
 
app.post("/alunos", function(req, res){
    const nomeQueVeioDoCliente = req.body.nome
    const emailQueVeioDoCliente = req.body.email
 
    if(!nomeQueVeioDoCliente || !emailQueVeioDoCliente){
        return res.status(400).json({erro: "Nome e e-mail são obrigatóros!"})
    }
 
    // Criando um objetivo novo ocm as infromações que veio do cliente
    const novoAluno = {
        id: 4,
        nome: nomeQueVeioDoCliente,
        email: emailQueVeioDoCliente
    }
 
    // Adiciona o novo aluno no final da lista
    alunos.push(novoAluno)
    res.status(201).send()
})
 
 
//Buscar por id
app.get("/alunos/:id", function(req, res){
    const id = parseInt(req.params.id) // O query parameter volta como um texto

const aluno = alunos.find(a => a.id == id)

//se a variavel for nula é igual a falso,
//se tiver alguma coisa é verdadeiro
if(aluno){
    return res.json(aluno)
} else {
    res.status(404).json("aluno não encontrado")
}

})

   

app.put("/alunos/:id", function(req, res){
    const id = parseInt(req.params.id)
    //const nome = req.body.nome
    //const email = req.body.email
    //desestruturação do objeto
    const {nome, email} = req.body

    if(!nome || !email){
        return res.status(400).json("nome e email são obrigatorios")
    }

    // precisa descobrir em qual posição do array/lista o aluno está pelo id
    const indexDoAluno = alunos.findIndex(a => a.id == id)

    if(indexDoAluno === -1){
        return res.status(404).json("aluno não encontrado")
    }

    // substitui os dados do aluno pelo novos dados da requisição
    alunos[indexDoAluno].email = email
    alunos[indexDoAluno].nome = nome

    return res.json(alunos[indexDoAluno])

})

app.delete("/alunos/:id", function(req, res) {
    const id = parseInt(req.params.id)
    const index = alunos.findIndex(a => a.id === id)

    if(index === -1){
        return res.status(404).json("aluno não encontrado")
    }

    // remove elementos a partir de um index
    //nesse caso ele remove um elemento a partir do index que
    // exemplo: frutas = ["maçã", "banana", "uva", "abacaxi"]
    //frutas.splice(1, 2) essa função vai retornar o que foi
    //no caso banana e uva ele removeu 2 elementos depois do
    // e a lista de frutas vai fica apenas ["maça", "banana"]

    const alunoRemovido = alunos.splice(index, 1)
    return res.status(204).json("aluno deletado com sucesso!")

})





//parte de professores

const professores =[
    {
        id: 1,
        nome: "bethania",
        disciplina: "filosofia",
        anoContratacao: 2022
    },
    {
        id: 2,
        nome: "gabriel",
        disciplina: "ed. fisica",
        anoContratacao: 2023
    },
    {
        id: 3,
        nome: "leo",
        disciplina: "quimica",
        anoContratacao: 2017 
    }
]


app.get("/professores", function(req, res){
    const anoContratacao = req.query .nome
   
    if("!"){
        return res.json(professores)
    }
    const profFiltrados = professores.filter(a => 
        a.nome.toLowerCase().includes (nome.toLowerCase())
    )

    res.json(profFiltrados)
})

app.delete("/professor/:id", function(req, res) {
    const id = parseInt(req.params.id)
    const index = professores.findIndex(a => a.id === id)

    if(index === -1){
        return res.status(404).json("não encontrado")
    }
    const professorRemovido = professor.splice(index, 1)
    return res.status(204).json("deletado com sucesso!")

})
















 
//Monitora/ Escuta a porta 3000
app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000!")
})
















 