# Node.js and Nginx Docker Compose

Este repositório contém configurações Docker Compose para executar um aplicativo Node.js com Nginx como proxy reverso.

## Pré-requisitos

Certifique-se de ter o Docker e o Docker Compose instalados.

## Configuração

### 1. Node.js:

- Navegue até o diretório `node/`.
- Execute `npm install` para instalar dependências.
- Teste localmente com `npm start` em [http://localhost:3000](http://localhost:3000).

### 2. Docker Compose:

- Volte ao diretório principal.
- Execute `docker-compose up -d --build` para iniciar os serviços.
- Acesse o aplicativo em [http://localhost:8080](http://localhost:8080).

### 3. Parar os Contêineres:

- Execute `docker-compose down` para encerrar os serviços.

Ajuste conforme necessário para seu projeto.
