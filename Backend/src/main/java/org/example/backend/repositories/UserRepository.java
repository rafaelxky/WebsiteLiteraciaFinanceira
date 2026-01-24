package org.example.backend.repositories;

import org.example.backend.models.article.Article;
import org.example.backend.models.user.AppUser;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<AppUser, Long> {

    Optional<AppUser> findByEmail(String email);

    boolean existsByEmail(String email);
    Page<AppUser> findAll(Pageable pageable);

}
