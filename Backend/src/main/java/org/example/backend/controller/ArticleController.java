package org.example.backend.controller;

import org.example.backend.model.article.Article;
import org.example.backend.model.article.ArticleCreateDto;
import org.example.backend.service.ArticleService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// todo: secure endpoints
@RestController
@RequestMapping("/api/articles")
public class ArticleController {

    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    // .../articles?page=int&size=int
    @GetMapping
    public Page<Article> getPage(
            @RequestParam int page,
            @RequestParam int size
    ) {
        var pageable = PageRequest.of(page,size);
        return articleService.findAll(pageable);
    }

    // not found exception
    @GetMapping("/{id}")
    public Article getById(@PathVariable Long id) {
        return articleService.getById(id);
    }

    // todo: secure
    @PostMapping
    public ResponseEntity<Article> create(@RequestBody ArticleCreateDto article) {
        Article created = articleService.create(article);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    // todo: secure
    // not found exception
    @PutMapping("/{id}")
    public Article update(@PathVariable Long id, @RequestBody Article article) {
        return articleService.update(id, article);
    }

    // todo: secure
    // not found exception
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        articleService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
