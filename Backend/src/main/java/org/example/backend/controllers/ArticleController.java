package org.example.backend.controllers;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.example.backend.models.article.Article;
import org.example.backend.models.article.ArticleCreateDto;
import org.example.backend.services.ArticleService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/articles")
@RequiredArgsConstructor
public class ArticleController {

    private final ArticleService articleService;

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
    public ResponseEntity<Article> getById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(articleService.getById(id));
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping
    public ResponseEntity<Article> create(@RequestBody ArticleCreateDto article) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !auth.isAuthenticated()) {
            throw new AccessDeniedException("Unauthenticated");
        }
        Article created = articleService.create(article, (Long) auth.getDetails());
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Article> update(@PathVariable Long id, @RequestBody Article article) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !auth.isAuthenticated()) {
            throw new AccessDeniedException("Unauthenticated");
        }
        var userId = (Long)auth.getDetails();
        if (!articleService.getById(id).getCreatorId().equals(userId)){
            throw new AccessDeniedException("Unauthenticated");
        }
        return ResponseEntity.ok(articleService.update(id, article));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !auth.isAuthenticated()) {
            throw new AccessDeniedException("Unauthenticated");
        }
        var userId = (Long)auth.getDetails();
        if (!articleService.getById(id).getCreatorId().equals(userId)){
            throw new AccessDeniedException("Unauthenticated");
        }
        articleService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
