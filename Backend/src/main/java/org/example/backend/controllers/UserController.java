package org.example.backend.controllers;

import jakarta.persistence.EntityNotFoundException;
import org.example.backend.models.user.AppUser;
import org.example.backend.models.user.UserCreateDto;
import org.example.backend.models.user.UserPublicDto;
import org.example.backend.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// todo: secure endpoints
@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // repeated email exception
    @PostMapping
    public ResponseEntity<AppUser> createUser(UserCreateDto user){
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.createUser(user));
    }

    @GetMapping
    public ResponseEntity<UserPublicDto> getUserById(Long id){
        try {
            UserPublicDto dto = userService.getById(id);
            return ResponseEntity.ok(dto);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    // todo:
    // get by email
    // update
    // delete
    // findAll
}
