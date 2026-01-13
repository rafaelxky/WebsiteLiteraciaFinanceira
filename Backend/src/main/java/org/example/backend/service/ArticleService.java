package org.example.backend.service;

import org.example.backend.model.Article;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ArticleService {
    Page<Article> getPage(Pageable pageable);

    Article getById(Long id);

    Article create(Article article);

    Article update(Long id, Article article);

    void delete(Long id);
}
