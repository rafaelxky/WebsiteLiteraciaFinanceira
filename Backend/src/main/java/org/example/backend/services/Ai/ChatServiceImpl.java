package org.example.backend.service.IA;

import org.example.backend.model.chat.ChatMessageRequest;
import org.example.backend.model.chat.ChatMessageResponse;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.stereotype.Service;

@Service
public class ChatServiceImpl implements ChatService {
    private final ChatModel chatModel;

    public ChatServiceImpl(ChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @Override
    public ChatMessageResponse answer(ChatMessageRequest request) {
        String message = request != null ? request.getMessage() : null;
        String reply = chatModel.call(message == null ? "" : message);
        return new ChatMessageResponse(reply);
    }
}
