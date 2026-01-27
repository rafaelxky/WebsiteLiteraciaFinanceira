package org.example.backend.models.article;

import jakarta.persistence.*;
import lombok.Data;
import lombok.experimental.Accessors;

@Entity
@Table(name = "articles")
@Data
@Accessors(chain = true)
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 180)
    private String title;

    @Lob
    @Column(nullable = false)
    private String content;

    @Column
    private Long creatorId;

    public Article() {}
}
