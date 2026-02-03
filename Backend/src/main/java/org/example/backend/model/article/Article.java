package org.example.backend.model.article;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.Accessors;
import java.time.LocalDate;

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

    @Column(length = 80)
    private String category;

    @Column
    private LocalDate date;

    @Column(length = 512)
    private String imageUrl;

    @Column
    private Long creatorId;

    public Article() {}
}
