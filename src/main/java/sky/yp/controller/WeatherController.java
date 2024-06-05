package sky.yp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import sky.yp.dto.WeatherData;
import sky.yp.service.WeatherService;

@RestController
public class WeatherController {

    @Autowired
    private WeatherService weatherService;

    @GetMapping("/api/weather")
    public WeatherData getWeather(@RequestParam String city) {
        return weatherService.getWeather(city);
    }
}
