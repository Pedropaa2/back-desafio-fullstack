# Desafio Full Stack Kenzie

## Introdução

Neste desafio, vamos relembrar conceitos que aprendemos ao longo do curso, desde conhecimento de front-end e back-end. Além de prepará-los para desafios reais das empresas.

#

## Endpoints:

| Método | Endpoint      | Responsabilidade                          | Autenticação                          |
| ------ | ------------- | ----------------------------------------- | ------------------------------------- |
| POST   | /clients      | Criação de client                         | Qualquer cliente, não necessita token |
| GET    | /clients/:id  | Lista um determinado cliente              | Apenas o dono da conta                |
| PATCH  | /clients/:id  | Atualiza um cliente                       | Apenas o dono da conta                |
| DELETE | /clients/:id  | Realiza um delete no cliente              | Apenas o dono da conta                |
| POST   | /login        | Gera o token de autenticação              | Qualquer usuário, não necessita token |
| POST   | /contacts     | Criação de contato                        | Apenas clientes registrados           |
| GET    | /contacts     | Lista todas os contatos do usuário logado | Apenas clientes registrados           |
| PATCH  | /contacts/:id | Atualiza um contato                       | Apenas o dono da conta                |
| DELETE | /contacts/:id | Realiza um delete no contato desejado     | Apenas o dono da conta                |

### GET - /clients/:id

- A rota deve retornar todos os dados do cliente, sem a hash de senha e com os seus contatos registrados;
- A rota pode ser acessada apenas pelo dono da conta.

### PATCH - /clients/:id

- A rota deve atualizar os dados do cliente;
- Não deve ser possível atualizar os campos **id** ;
- A rota pode ser acessada apenas pelo dono da conta

### DELETE - /clients/:id

- A rota deve realizar um delete do cliente;
- A rota pode ser acessada apenas pelo dono da conta

### POST - /login

- Rota de login recebendo **email** e **password**;
- O login deve validar se o usuário existe e validar se a senha está correta;
- A rota **não precisa de autenticação** para ser acessada.

### POST - /clients

- Rota para criação de clients com os seguintes dados:
  - **id**: Valor SERIAL. Não deve ser passado, mas gerado pelo **typeORM**.
  - **name**: string, máximo de 45 caracteres, obrigatório e único
  - **email**: string, máximo de 45 caracteres, obrigatório e único
  - **password**: string, máximo de 12 caracteres, obrigatório
- Não podem ser cadastrados dois clientes com o mesmo nome.
- A rota **não precisa de autenticação** para ser acessada.

### GET - /contacts

- Rota deve listar todos os contatos do usuário logado.
- A rota precisa de autenticação para ser acessada

### PATCH - /contacts/:id

- Rota para atualizar os dados de um contato.
- A rota precisa de autenticação para ser acessada.

### POST - /contacts

- Rota para criação de um imóvel com os seguintes dados:

  - **id**: Valor SERIAL. Não deve ser passado, mas gerado pelo typeORM.
  - **name**: string, máximo de 45 caracteres, obrigatório
  - **email**: string, máximo de 45 caracteres, obrigatório e único
  - **telephone**: string, máximo de 45 caracteres, obrigatório

  - A rota precisa de autenticação para ser acessada.

### DELETE - /contacts/:id

- A rota deve realizar um delete do contato;
- A rota pode ser acessada apenas pelo dono da conta
