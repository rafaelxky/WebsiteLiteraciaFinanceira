package org.example.backend.service;

import org.example.backend.model.article.Article;
import org.example.backend.model.article.ArticleCreateDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ArticleService {
    Page<Article> findAll(Pageable pageable);

    Article getById(Long id);

    Article create(ArticleCreateDto article);

    Article update(Long id, Article article);

    void delete(Long id);
}
