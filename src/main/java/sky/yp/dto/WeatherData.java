package sky.yp.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WeatherData {
    private String name;
    private MainData main;
    private Weather[] weather;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public MainData getMain() {
        return main;
    }

    public void setMain(MainData main) {
        this.main = main;
    }

    public Weather[] getWeather() {
        return weather;
    }

    public void setWeather(Weather[] weather) {
        this.weather = weather;
    }
}
