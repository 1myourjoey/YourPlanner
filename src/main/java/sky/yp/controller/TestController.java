package sky.yp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/app")
    public String getApp() {
        return "App.js";
    }
}
