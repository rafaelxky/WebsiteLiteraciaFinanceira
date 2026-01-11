package org.example.backend.service;

import org.example.backend.model.Article;
import org.example.backend.repository.ArticleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository articleRepository;

    public ArticleServiceImpl(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @Override
    public List<Article> getAll() {
        return articleRepository.findAllByOrderByIdDesc();
    }

    @Override
    public Article getById(Long id) {
        return articleRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Article not found: " + id));
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
