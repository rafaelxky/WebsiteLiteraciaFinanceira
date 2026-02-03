package org.example.backend.model.article;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@Builder
public class ArticleCreateDto {
    private String title;
    private String content;
    private String category;
    private LocalDate date;
    private String imageUrl;
}
