package org.example.backend.model.article;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class ArticleCreateDto {
    private String title;
    private String content;
}
