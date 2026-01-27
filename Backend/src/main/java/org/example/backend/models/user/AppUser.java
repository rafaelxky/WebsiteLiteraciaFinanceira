package org.example.backend.models.user;

import jakarta.persistence.*;
import lombok.Data;
import org.example.backend.models.auth.UserRole;

@Entity
@Table(name = "users",
        uniqueConstraints = @UniqueConstraint(columnNames = "email"))
@Data
public class AppUser {

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

    public AppUser() {}

}
