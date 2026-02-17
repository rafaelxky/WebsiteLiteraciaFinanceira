package org.example.backend.services.security;


import org.example.backend.models.user.AppUser;
import org.example.backend.services.UserService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService  {

    private final UserService userService;

    public UserDetailsService(UserService userService) {
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        AppUser user;
        try{
            user = userService.getByEmail(email);
        } catch (IllegalArgumentException ex){
            throw new UsernameNotFoundException("User not found: " + email);
        }

        return User.builder()
                .username(user.getEmail())
                .password(user.getPasswordHash())
                .roles(String.valueOf(user.getRole()))
                .build();
    }
}
