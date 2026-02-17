package org.example.backend.controller;

import org.example.backend.model.chat.ChatMessageRequest;
import org.example.backend.model.chat.ChatMessageResponse;
import org.example.backend.service.IA.ChatService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/chat")
public class ChatController {
    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @PostMapping
    public ResponseEntity<ChatMessageResponse> answer(@RequestBody ChatMessageRequest request) {
        ChatMessageResponse response = chatService.answer(request);
        return ResponseEntity.ok(response);
    }
}
