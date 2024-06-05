package sky.yp.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import sky.yp.service.ChatGPTService;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ChatGPTController {
    @Autowired
    private ChatGPTService chatGPTService;

    @PostMapping("/chat")
    public Map<String, String> chat(@RequestBody Map<String, String> payload) {
        String message = payload.get("message");
        String response = chatGPTService.getChatGPTResponse(message);
        Map<String, String> responseMap = new HashMap<>();
        responseMap.put("response", response);
        return responseMap;
    }
}
