package org.example.backend.service;

import org.example.backend.model.Article;

import java.util.List;

public interface ArticleService {
    List<Article> getAll();

    Article getById(Long id);

    Article create(Article article);

    Article update(Long id, Article article);

    void delete(Long id);
}
