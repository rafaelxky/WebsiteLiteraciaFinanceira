package org.example.backend.service;

import org.example.backend.model.User;

public interface UserService {
    User createUser(User user);

    User getById(Long id);

    User getByEmail(String email);

    void deleteUser(Long id);
}

