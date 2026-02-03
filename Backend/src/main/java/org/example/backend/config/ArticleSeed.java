package org.example.backend.config;

import org.example.backend.model.article.Article;
import org.example.backend.repositories.ArticleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class ArticleSeed implements CommandLineRunner {

    private final ArticleRepository articleRepository;

    public ArticleSeed(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @Override
    public void run(String... args) {
        long count = articleRepository.count();
        if (count >= 2) {
            return;
        }

        if (count == 0) {
            articleRepository.save(makeArticle(
                    "Como criar um orcamento familiar simples",
                    "Um orcamento claro ajuda a controlar gastos e poupar. Comece por listar rendimentos e despesas fixas.\nDepois acompanhe os gastos variaveis semanalmente e ajuste metas de poupanca.",
                    "Poupanca",
                    LocalDate.of(2025, 1, 15),
                    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=60"
            ));
        }

        articleRepository.save(makeArticle(
                "Cartao de credito: regras basicas para evitar juros",
                "Evite pagar apenas o minimo e defina um limite mensal realista. Use alertas e pague o saldo total sempre que possivel.\nAssim, o cartao vira aliado e nao um problema.",
                "Financas",
                LocalDate.of(2025, 2, 1),
                "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=60"
        ));
    }

    private Article makeArticle(String title, String content, String category, LocalDate date, String imageUrl) {
        Article article = new Article();
        article.setTitle(title);
        article.setContent(content);
        article.setCategory(category);
        article.setDate(date);
        article.setImageUrl(imageUrl);
        return article;
    }
}
