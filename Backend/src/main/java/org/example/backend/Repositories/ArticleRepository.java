package org.example.backend.repository;

import org.example.backend.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArticleRepository extends JpaRepository<Article, Long> {

    List<Article> findAllByOrderByIdDesc(); // simples (podes ordenar por createdAt quando tiveres)
}
