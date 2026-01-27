package org.example.backend.controllers;

import lombok.RequiredArgsConstructor;
import org.example.backend.models.auth.LoginRequest;
import org.example.backend.models.user.AppUser;
import org.example.backend.services.UserService;
import org.example.backend.services.security.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserService userService;

    // repeated email exception
    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        AppUser user = userService.getByEmail(request.getEmail());

        return jwtService.generateToken(user.getId(), request.getEmail());
    }
}