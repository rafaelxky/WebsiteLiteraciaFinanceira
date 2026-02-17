package org.example.backend.config;

import org.example.backend.models.user.AppUser;
import org.example.backend.models.auth.UserRole;
import org.example.backend.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DataInitializer(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // change to local file to avoid security issues
    @Bean
    CommandLineRunner init() {
        return args -> {
            if (!userRepository.existsByEmail("admin@example.com")) {
                AppUser admin = new AppUser();
                admin.setEmail("admin@example.com");
                admin.setPasswordHash(passwordEncoder.encode("password123"));
                admin.setRole(UserRole.ADMIN);
                admin.setUserName("Admin");
                userRepository.save(admin);
            }
        };
    }
}
