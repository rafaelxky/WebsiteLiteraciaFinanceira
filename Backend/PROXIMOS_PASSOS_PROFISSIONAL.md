# Ficheiros a criar para concluir o projeto de forma profissional

Este checklist assume a estrutura atual (Spring Boot no backend + React/Vite no frontend) e indica os ficheiros que normalmente faltam para uma aplicacao completa, robusta e pronta para producao.

## Backend (Spring Boot)
### Endpoints e DTOs

- `Backend/src/main/java/org/example/backend/controller/AuthController.java` (login/registro)
- `Backend/src/main/java/org/example/backend/dto/UserCreateDto.java`
- `Backend/src/main/java/org/example/backend/dto/UserPublicDto.java`
- `Backend/src/main/java/org/example/backend/dto/LoginRequestDto.java`
- `Backend/src/main/java/org/example/backend/dto/LoginResponseDto.java`

### Servicos e repositorios
- `Backend/src/main/java/org/example/backend/service/UserService.java`
- `Backend/src/main/java/org/example/backend/repository/UserRepository.java`

### Seguranca e configuracao
- `Backend/src/main/java/org/example/backend/config/SecurityConfig.java`
- `Backend/src/main/java/org/example/backend/config/CorsConfig.java` (ou manter `@CrossOrigin` nos controllers)

### Tratamento de erros
- `Backend/src/main/java/org/example/backend/exception/ApiExceptionHandler.java`
- `Backend/src/main/java/org/example/backend/exception/NotFoundException.java`
- `Backend/src/main/java/org/example/backend/exception/BadRequestException.java`

### Tests
- `Backend/src/test/java/org/example/backend/controller/ArticleControllerTest.java`
- `Backend/src/test/java/org/example/backend/controller/UserControllerTest.java`
- `Backend/src/test/java/org/example/backend/service/UserServiceTest.java`

## Frontend (React/Vite)
### Cliente HTTP e configuracao
- `Frontend/src/services/apiClient.js` (wrapper de fetch com baseUrl e headers)
- `Frontend/.env` (ex: `VITE_API_URL=http://localhost:8080/api`)
- `Frontend/src/config.js` (leitura do `VITE_API_URL`)

### Servicos reais
- `Frontend/src/services/articles/ArticlesService.js`
- `Frontend/src/services/users/UsersService.js`
- `Frontend/src/services/security/SecurityService.js`

### Hooks e estado
- `Frontend/src/hooks/useArticles.js`
- `Frontend/src/hooks/useAuth.js`
- `Frontend/src/context/AuthContext.jsx`

### Tipos/modelos
- `Frontend/src/models/articles/ArticleDto.js`
- `Frontend/src/models/users/UserDto.js`

### Tests
- `Frontend/src/services/__tests__/articles.test.js`
- `Frontend/src/services/__tests__/auth.test.js`

## DevOps e documentacao
- `README.md` (com passos de setup, run, e build)
- `Backend/README.md` (detalhes do backend)
- `Frontend/README.md` (detalhes do frontend)
- `.env.example` (variaveis de ambiente)
- `docker-compose.yml` (app + db)
- `Backend/Dockerfile` e `Frontend/Dockerfile`

## Prioridade sugerida
1) Endpoints e DTOs no backend
2) Servicos reais no frontend + `apiClient.js`
3) Auth + seguranca
4) Tratamento de erros
5) Tests
6) Docker e documentacao

Se quiseres, digo-te exatamente a ordem de implementacao e posso criar a estrutura base destes ficheiros por ti.
