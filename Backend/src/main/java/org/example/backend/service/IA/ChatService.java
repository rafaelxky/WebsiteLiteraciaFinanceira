package org.example.backend.service.IA;

import org.example.backend.model.chat.ChatMessageRequest;
import org.example.backend.model.chat.ChatMessageResponse;

public interface ChatService {
    ChatMessageResponse answer(ChatMessageRequest request);

}
