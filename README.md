# API ESCOLA - Node.js + Express

API REST simples para gereciar alunos e professores
 
## Pré-requisitos

- Node.js instalado
 
## Como rodar
 
### Instalar dependências

```bash

npm i 

```
 
### Inciar o servidor

```bash

node index.js

```
 
### Acessar 

Abra o navegador em : `http://localhost:3000`
 
 
## Endpoints
 
### Alunos
 
| Método | Endpoint | Descrição | 

|--------|----------|-----------|

| GET | `/alunos` | Lista todos os alunos |

| GET | `/alunos/:id` | Buscar um aluno específico |

| POST | `/alunos` | Cria um novo aluno |

| PUT | `/alunos/:id` | Atualiza um aluno |

| DELETE | `/alunos/:id` | Remove um aluno | 

### Professores
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET  |`/professores` | Lista todos os professores |
| POST | `/professores` | Buscar um professor específico |
| POST | `/professores` | Cria um novo professor |
| PUT | `/professores` | Atualiza um professor |
| DELETE | `/professores` | Remove um professor |

## Tecnologias
- Node.Js
- Express

## Notas
- Os dados são armazenados em memória (reiniciar o servidor apaga tudo)

 
