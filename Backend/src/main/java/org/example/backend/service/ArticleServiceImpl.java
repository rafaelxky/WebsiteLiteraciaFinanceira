package org.example.backend.service;

import jakarta.persistence.EntityNotFoundException;

import org.example.backend.model.Article;
import org.example.backend.repositories.ArticleRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleServiceImpl implements org.example.backend.service.ArticleService {

    private final ArticleRepository articleRepository;

    public ArticleServiceImpl(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @Override
    public Page<Article> getPage(Pageable pageable) {
        return articleRepository.getPage(pageable);
    }

    @Override
    public Article getById(Long id) {
        return articleRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Article not found: " + id));
    }

    @Override
    public Article create(Article article) {
        return articleRepository.save(article);
    }

    @Override
    public Article update(Long id, Article article) {
        Article existing = getById(id);
        existing.setTitle(article.getTitle());
        existing.setContent(article.getContent());
        return articleRepository.save(existing);
    }

    @Override
    public void delete(Long id) {
        Article existing = getById(id);
        articleRepository.delete(existing);
    }
}
