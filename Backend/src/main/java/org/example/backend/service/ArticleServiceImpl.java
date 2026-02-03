package org.example.backend.service;

import jakarta.persistence.EntityNotFoundException;
import org.example.backend.model.article.ArticleCreateDto;
import org.example.backend.repositories.ArticleRepository;
import org.example.backend.model.article.Article;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ArticleServiceImpl implements org.example.backend.service.ArticleService {

    private final ArticleRepository articleRepository;

    public ArticleServiceImpl(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @Override
    public Page<Article> findAll(Pageable pageable) {
        return articleRepository.findAll(pageable);
    }

    @Override
    public Article getById(Long id) {
        return articleRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Article not found: " + id));
    }

    // assign article creatorId to user
    @Override
    public Article create(ArticleCreateDto article) {
        Article newArticle = new Article();
        newArticle.setContent(article.getContent());
        newArticle.setTitle(article.getTitle());
        newArticle.setCategory(article.getCategory());
        newArticle.setDate(article.getDate());
        newArticle.setImageUrl(article.getImageUrl());
        return articleRepository.save(newArticle);
    }

    @Override
    public Article update(Long id, Article article) {
        Article existing = getById(id);
        existing.setTitle(article.getTitle());
        existing.setContent(article.getContent());
        existing.setCategory(article.getCategory());
        existing.setDate(article.getDate());
        existing.setImageUrl(article.getImageUrl());
        return articleRepository.save(existing);
    }

    @Override
    public void delete(Long id) {
        Article existing = getById(id);
        articleRepository.delete(existing);
    }
}
