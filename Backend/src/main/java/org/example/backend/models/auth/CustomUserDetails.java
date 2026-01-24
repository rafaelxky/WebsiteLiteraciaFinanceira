package org.example.backend.models.auth;

import lombok.Data;

@Data
public class CustomUserDetails {
    private final Long id;
    private final String username;
    private final String password;
}
