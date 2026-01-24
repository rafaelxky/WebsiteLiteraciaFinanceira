package org.example.backend.services;

import jakarta.persistence.EntityNotFoundException;
import org.example.backend.models.auth.UserRole;
import org.example.backend.models.user.AppUser;
import org.example.backend.models.user.UserCreateDto;
import org.example.backend.models.user.UserPublicDto;
import org.example.backend.repositories.UserRepository;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, @Lazy PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public AppUser createUser(UserCreateDto user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new IllegalArgumentException("Email already in use: " + user.getEmail());
        }
        var newUser = new AppUser();
        newUser.setUserName(user.getUserName());
        newUser.setEmail(user.getEmail());
        newUser.setPasswordHash(passwordEncoder.encode(user.getPassword()));
        newUser.setRole(UserRole.PUBLIC);
        return userRepository.save(newUser);
    }

    @Override
    public UserPublicDto getById(Long id) throws EntityNotFoundException {
        var user = userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found: " + id));
        return UserPublicDto.builder().name(user.getUserName()).id(user.getId()).build();
    }

    @Override
    public AppUser getByEmail(String email) throws EntityNotFoundException {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException("User not found for email: " + email));
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    // updateUser
}
