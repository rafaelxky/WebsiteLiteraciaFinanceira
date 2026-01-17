package org.example.backend.model.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class UserPublicDto {
    private String name;
    private Long id;
}
