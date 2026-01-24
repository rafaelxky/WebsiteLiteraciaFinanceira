package org.example.backend.controllers;

import jakarta.persistence.EntityNotFoundException;
import org.example.backend.models.user.AppUser;
import org.example.backend.models.user.UserCreateDto;
import org.example.backend.models.user.UserPublicDto;
import org.example.backend.services.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.net.Authenticator;

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

    // secure
    @PutMapping
    public HttpStatus updateUser(@RequestBody UserCreateDto user){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !auth.isAuthenticated()) {
            throw new AccessDeniedException("Unauthenticated");
        }
        userService.updateUser(user, (Long) auth.getDetails());
        return HttpStatus.OK;
    }

    // delete
    public HttpStatus deleteUser(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !auth.isAuthenticated()) {
            throw new AccessDeniedException("Unauthenticated");
        }
        userService.deleteUser((Long) auth.getDetails());
        return HttpStatus.OK;
    }

    // .../api/user?page=int&size=int
    public Page<UserPublicDto> getUsers(
            @RequestParam int page,
            @RequestParam int size
    ){
        var pageable = PageRequest.of(page, size);
        return userService.findAll(pageable);
    }
    // findAll
}
