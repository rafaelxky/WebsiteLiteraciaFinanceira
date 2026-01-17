# Passos feitos e por que motivo

Este documento regista, de forma simples, tudo o que foi feito para ligar o backend ao frontend, permitir ler artigos da base de dados e preparar o envio de imagens a partir do backend.

## 1) Backend a arrancar e ligado ao Postgres

### O que foi feito
- Garantir que o backend corre com `mvn spring-boot:run` dentro da pasta `Backend/`.
- Ajustar password do Postgres (se necessario) e usar o perfil correto.

### Por que foi feito
- Sem o backend a correr e sem ligacao ao Postgres, nao ha API nem dados para o frontend.

### Como funciona
- O backend usa `application.properties` (ou `application-local.properties` se o perfil `local` estiver ativo).
- O Spring Boot cria as tabelas via JPA (`spring.jpa.hibernate.ddl-auto=update`).

## 2) Corrigir erro do repositorio de artigos

### O que foi feito
- Removido o metodo `getPage(Pageable)` do `ArticleRepository`.
- O service passou a usar `findAll(pageable)`.

### Por que foi feito
- `getPage` nao e um metodo valido para query derivada no Spring Data.
- `JpaRepository` ja oferece `findAll(Pageable)` com paginacao.

## 3) Ligar o frontend ao backend

### O que foi feito
- A pagina `Articles` passou a buscar artigos reais via `GET /api/articles`.
- A pagina `ArticleDetail` passou a buscar o artigo por `GET /api/articles/{id}`.
- Removido o uso de dados estaticos do ficheiro `articlesData.jsx` nas paginas.

### Por que foi feito
- O objetivo e mostrar os artigos que estao na base de dados e nao artigos fixos.

### Como funciona
- `Frontend/src/pages/Articles.jsx` faz `fetch("http://localhost:8080/api/articles?page=0&size=10")`.
- `Frontend/src/pages/ArticleDetail.jsx` faz `fetch("http://localhost:8080/api/articles/{id}")`.

## 4) Criar artigos de teste (seed)

### O que foi feito
- Criado um script de seed e pedidos `POST /api/articles` para criar artigos.
- Criados 8 artigos adicionais na base de dados.

### Por que foi feito
- O frontend precisa de dados reais para validar a listagem e o detalhe.

### Como funciona
- Cada artigo e enviado em JSON com `title` e `content`.

Exemplo:
```bash
curl -X POST http://localhost:8080/api/articles \
  -H "Content-Type: application/json" \
  -d '{"title":"Artigo teste","content":"Conteudo do artigo"}'
```

## 5) Suporte a imagens vindas do backend

### O que foi feito
- Adicionado o campo `imageUrl` ao modelo `Article` no backend.
- O frontend agora usa `imageUrl` quando existe.
- Mantem um placeholder apenas quando `imageUrl` esta vazio.

### Por que foi feito
- Para que as imagens nao sejam fixas e venham da base de dados.

### Como funciona
- Backend: `Article` tem agora `imageUrl`.
- Frontend: usa `a.imageUrl` em listagem e `data.imageUrl` no detalhe.

Exemplo de criacao com imagem:
```bash
curl -X POST http://localhost:8080/api/articles \
  -H "Content-Type: application/json" \
  -d '{"title":"Artigo com imagem","content":"Texto...","imageUrl":"https://..."}'
```

## 6) Estado atual

- Backend esta a servir artigos reais do Postgres.
- Frontend consome esses artigos via API.
- Imagens podem ser enviadas no payload dos artigos.

## 7) Proximos passos recomendados

- Adicionar campos reais (categoria, data, excerpt) ao modelo no backend.
- Criar formulario no frontend para adicionar artigos (em vez de `curl`).
- Criar uma pagina de administracao para gerir artigos.

