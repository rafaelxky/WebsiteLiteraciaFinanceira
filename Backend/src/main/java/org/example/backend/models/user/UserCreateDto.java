package org.example.backend.models.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class UserCreateDto {
    private String email;
    private String userName;
    private String password;
}
