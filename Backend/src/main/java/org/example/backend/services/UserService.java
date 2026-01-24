package org.example.backend.services;

import org.example.backend.models.user.AppUser;
import org.example.backend.models.user.UserCreateDto;
import org.example.backend.models.user.UserPublicDto;

public interface UserService {
    AppUser createUser(UserCreateDto user);

    UserPublicDto getById(Long id);

    AppUser getByEmail(String email);

    void deleteUser(Long id);

    // updateUser
}

