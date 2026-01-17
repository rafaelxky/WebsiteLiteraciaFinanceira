# Testar backend e frontend (passo a passo)

## 1) Confirmar o backend
1. Abre um terminal.
2. Vai para a pasta do backend (exemplo):
   ```bash
   cd /caminho/do/backend
   ```
3. Inicia o servidor (depende da tecnologia):
   - Spring Boot:
     ```bash
     ./mvnw spring-boot:run
     ```
     ou
     ```bash
     ./gradlew bootRun
     ```
   - Node/Express:
     ```bash
     npm install
     npm run dev
     ```
4. Verifica se o backend responde:
   - No browser ou curl:
     ```bash
     curl -i http://localhost:8080/api/articles
     ```
   - Se existir health check:
     ```bash
     curl -i http://localhost:8080/api/health
     ```

## 2) Confirmar o frontend
1. Abre outro terminal.
2. Vai para o frontend:
   ```bash
   cd /home/daniel/Documents/literaciafinanceira/Frontend
   ```
3. Inicia o frontend:
   ```bash
   npm install
   npm run dev
   ```
4. Abre o browser no URL que aparecer (normalmente `http://localhost:5173`).

## 3) Ligar frontend aos controllers (teste rapido)
1. Garante que o backend esta ligado e responde (passo 1).
2. No frontend, confirma o baseUrl:
   - Ficheiro: `src/Dependencies.js`
   - Exemplo:
     ```js
     const baseUrl = "http://localhost:8080/api/";
     ```
3. Abre a pagina de artigos e verifica no console do browser se existem erros de rede.

## 4) Teste simples via console do browser
1. Abre o site do frontend.
2. Abre o DevTools (F12) e corre:
   ```js
   fetch("http://localhost:8080/api/articles")
     .then((r) => r.json())
     .then(console.log)
     .catch(console.error);
   ```

## 5) Problemas comuns
- CORS bloqueado: ativa CORS no backend para `http://localhost:5173`.
- Porta errada: confirma a porta do backend.
- Endpoint errado: confirma se e `/api/articles` e `/api/users`.

## 6) Quando estiver a funcionar
- A lista de artigos deve vir do backend.
- O console nao deve mostrar erros de fetch.

Se quiseres, diz-me o caminho do backend e a tecnologia que eu ajusto os comandos.
