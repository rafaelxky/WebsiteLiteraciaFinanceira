package org.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "users",
        uniqueConstraints = @UniqueConstraint(columnNames = "email"))
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 120)
    private String email;

    @Column(name = "user_name", nullable = false, length = 60)
    private String userName;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private UserRole role = UserRole.PUBLIC;

    @Column(name = "password_hash", nullable = false, length = 255)
    private String passwordHash;

    public User() {}

}
