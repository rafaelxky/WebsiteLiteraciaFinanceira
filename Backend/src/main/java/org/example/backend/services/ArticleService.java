package org.example.backend.services;

import org.example.backend.models.article.Article;
import org.example.backend.models.article.ArticleCreateDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ArticleService {
    Page<Article> findAll(Pageable pageable);

    Article getById(Long id);

    public Article create(ArticleCreateDto article, Long creatorId);

    Article update(Long id, Article article);

    void delete(Long id);
}
