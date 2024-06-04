package sky.yp.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import sky.yp.dto.WeatherData;

@Service
public class WeatherService {
    private final WebClient webClient;

    @Value("${openweather.api.key}")
    private String apiKey;

    @Value("${openweather.api.url}")
    private String apiUrl;

    public WeatherService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.build();
    }

    public Mono<WeatherData> getWeather(String city) {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/data/2.5/weather")
                        .queryParam("q", city)
                        .queryParam("appid", apiKey)
                        .queryParam("units", "metric")
                        .build())
                .retrieve()
                .bodyToMono(WeatherData.class)
                .doOnNext(weatherData -> System.out.println("Received weather data: " + weatherData))
                .doOnError(error -> System.err.println("Error fetching weather data: " + error.getMessage()));
    }
}
