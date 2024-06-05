package sky.yp.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import sky.yp.dto.WeatherData;

@Service
public class WeatherService {

    @Value("${openweather.api.key}")
    private String apiKey;

    @Value("${openweather.api.url}")
    private String apiUrl;

    public WeatherData getWeather(String city) {
        String url = apiUrl + "?q=" + city + "&appid=" + apiKey + "&units=metric";
        System.out.println(city);
        System.out.println(url);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<WeatherData> response = restTemplate.getForEntity(url, WeatherData.class);
        return response.getBody();
    }
}
