package sky.yp.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MainData {
    private double temp;

    public double getTemp() {
        return temp;
    }

    public void setTemp(double temp) {
        this.temp = temp;
    }
}
