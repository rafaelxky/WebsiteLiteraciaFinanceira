package org.example.backend.services;

import org.example.backend.models.user.AppUser;
import org.example.backend.models.user.UserCreateDto;
import org.example.backend.models.user.UserPublicDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface UserService {
    AppUser createUser(UserCreateDto user);

    UserPublicDto getById(Long id);

    AppUser getByEmail(String email);

    void deleteUser(Long id);

    Page<UserPublicDto> findAll(Pageable pageable);

    void updateUser(UserCreateDto user, long id);
    void deleteUser(long id);
}

