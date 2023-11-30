# Node.js and Nginx Docker Compose

Este repositório contém configurações Docker Compose para executar um aplicativo Node.js com Nginx como proxy reverso.

## Pré-requisitos

Certifique-se de ter o Docker e o Docker Compose instalados.

## Configuração

### 1. Node.js:

- Navegue até o diretório `node/`.
- Execute `npm install` para instalar dependências.
- Teste localmente com `npm start` em [http://localhost:3000](http://localhost:3000).

### 2. MySql:

- Volte ao diretório principal.
- Crie uma pasta com nome `db`
- Execute `docker exec -t db bash` para entrar no container do mysql.
- Execute `mysql -uroot -p`
- Insira a senha quando solicitado (senha: 'root').
- Use o banco de dados `nodedb`.
    ```sql
    use nodedb;
    ```
- Crie a tabela `tb_peoples`.
    ```sql
    CREATE TABLE tb_peoples (
        ID INT AUTO_INCREMENT PRIMARY KEY,
        NAME VARCHAR(255) NOT NULL
    );
    ```

### 3. Docker Compose:

- Volte ao diretório principal.
- Execute `docker-compose up -d --build` para iniciar os serviços.
- Acesse o aplicativo em [http://localhost:8080](http://localhost:8080).

### 4. Parar os Contêineres:

- Execute `docker-compose down` para encerrar os serviços.

Ajuste conforme necessário para seu projeto.
