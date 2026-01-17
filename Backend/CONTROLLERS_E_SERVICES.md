# Controllers, Services e ligacao ao frontend

Este documento resume o que os controllers e services fazem hoje e como a ligacao com o frontend deve funcionar para ler artigos da base de dados e permitir criar artigos no futuro.

## Backend (Spring Boot)

### Controllers (camada HTTP)

- `ArticleController` (`/api/articles`)
  - `GET /api/articles?page=...&size=...` devolve uma pagina de artigos.
  - `GET /api/articles/{id}` devolve um artigo pelo id.
  - `POST /api/articles` cria um artigo.
  - `PUT /api/articles/{id}` atualiza um artigo.
  - `DELETE /api/articles/{id}` remove um artigo.

- `UserController` (`/api/users`)
  - `POST /api/users` cria utilizador.
  - `GET /api/users/{id}` devolve utilizador por id.
  - `GET /api/users/by-email?email=...` devolve utilizador por email.
  - `DELETE /api/users/{id}` remove utilizador.

### Services (camada de logica)

- `ArticleService`/`ArticleServiceImpl`
  - Implementa a logica dos artigos e delega no `ArticleRepository`.
  - Usa `findAll(pageable)` para devolver pagina de artigos.
  - Usa `save` e `deleteById` do Spring Data JPA.

- `UserService`/`UserServiceImpl`
  - Implementa a logica dos utilizadores e delega no `UserRepository`.
  - Usa `save`, `findById`, `findByEmail` e `deleteById`.

### Repositories (acesso a BD)

- `ArticleRepository` estende `JpaRepository` e usa as queries automaticas do Spring Data JPA.
- `UserRepository` faz o mesmo para utilizadores.

A BD usada e PostgreSQL, configurada em `Backend/src/main/resources/application.properties` (ou `application-local.properties` quando o perfil `local` estiver ativo).

## Ligacao ao frontend

### Estado atual

O frontend **nao esta ligado ao backend** para artigos. As paginas de artigos usam dados estaticos em `Frontend/src/data/articlesData.jsx`.

- `Frontend/src/pages/Articles.jsx` usa `articles` do ficheiro estatico.
- `Frontend/src/pages/ArticleDetail.jsx` usa `articles` do ficheiro estatico.
- Existe um service para API, mas nao esta usado no UI: `Frontend/src/services/articles/TestArticlesService.js`.

### O que falta para ler da BD

Para ler artigos da base de dados, o frontend tem de chamar o backend:

- Listagem: `GET http://localhost:8080/api/articles?page=0&size=10`
- Detalhe: `GET http://localhost:8080/api/articles/{id}`

No frontend, isto deve substituir o `articlesData.jsx`.

### O que falta para criar artigos no futuro

Para criar artigos:

- `POST http://localhost:8080/api/articles`
  - Body JSON:
    ```json
    {
      "title": "Titulo do artigo",
      "content": "Conteudo do artigo"
    }
    ```

No frontend, precisas de um formulario que use `fetch` (ou o `TestArticlesService.NewArticle`) para enviar o artigo ao backend.

## Resumo rapido

- Controllers recebem pedidos HTTP e chamam services.
- Services fazem a logica e chamam repositories.
- Repositories falam com a base de dados.
- O frontend ainda usa dados estaticos e precisa de ligar ao backend para ler e criar artigos.

