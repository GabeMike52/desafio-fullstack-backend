# Desafio Fullstack Backend

Backend do desafio fullstack, onde temos uma lista de tarefas, podendo criar e visualizar essas tarefas.

## Como baixar o Projeto

1. Clonar o repositório na sua máquina

```console
git clone https://github.com/GabeMike52/desafio-fullstack-backend.git
cd desafio-fullstack-backend
```

2. Instalar as dependências do projeto

```console
#Dentro da pasta principal do projeto (ver passo anterior)
npm install
```

3. Configurar as variáveis de ambiente

```console
#Crie um arquivo .env e insira as variáveis de ambiente
POSTGRES_URI=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=
#Use as credenciais que desejar
```

4. Inicie o banco de dados com o Docker

```console
docker compose up
#Ou
docker-compose up -d
```

## Como executar o Projeto

1. Executar o comando para rodar o servidor

```console
npm run start
```

2. Enviar as requisições!
