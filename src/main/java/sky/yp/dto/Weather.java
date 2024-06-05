package sky.yp.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Weather {
    private String description;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
