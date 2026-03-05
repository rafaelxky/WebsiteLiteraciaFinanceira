package org.example.backend.models.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.example.backend.models.auth.UserRole;

@Data
@AllArgsConstructor
@Builder
public class UserPublicDto {
    private String name;
    private Long id;
    private UserRole role;
}
