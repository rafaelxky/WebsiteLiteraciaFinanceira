package org.example.backend.service;

import org.example.backend.model.user.AppUser;
import org.example.backend.model.user.UserCreateDto;
import org.example.backend.model.user.UserPublicDto;

public interface UserService {
    AppUser createUser(UserCreateDto user);

    UserPublicDto getById(Long id);

    AppUser getByEmail(String email);

    void deleteUser(Long id);

    // updateUser
}

