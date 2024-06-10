package sky.yp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import sky.yp.dto.ChatCompletionRequest;
import sky.yp.dto.ChatCompletionResponse;
import sky.yp.dto.ChatMessage;

import java.util.Collections;

@Service
public class ChatGPTService {

    @Autowired
    private RestTemplate restTemplate;

    @Value("${openai.api.key}")
    private String apiKey;

    @Value("${openai.api.url}")
    private String apiUrl;

    public ChatGPTService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String getChatGPTResponse(String userMessage) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        ChatMessage userMessageObj = new ChatMessage();
        userMessageObj.setRole("user");
        userMessageObj.setContent(userMessage);

        ChatCompletionRequest request = new ChatCompletionRequest();
        request.setModel("gpt-3.5-turbo");
        request.setMessages(Collections.singletonList(userMessageObj));

        HttpEntity<ChatCompletionRequest> entity = new HttpEntity<>(request, headers);

        ChatCompletionResponse response = restTemplate.exchange(apiUrl, HttpMethod.POST, entity, ChatCompletionResponse.class).getBody();

        return response != null && !response.getChoices().isEmpty()
                ? response.getChoices().get(0).getMessage().getContent()
                : "No response from ChatGPT";
    }
}
