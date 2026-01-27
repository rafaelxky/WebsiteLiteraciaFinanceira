package org.example.backend.service;

import org.example.backend.model.chat.ChatMessageResponse;

public interface ChatService {
    ChatMessageResponse reply(String message);
}
