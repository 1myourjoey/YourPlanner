package sky.yp.dto;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SavePlanRequest {
    private String startDate;
    private String endDate;
    private String departure;
    private String destination;
    private SelectedItems selectedItems;

    @Override
    public String toString() {
        return "SavePlanRequest{" +
                "start=" + getStartDate() +
                ", end=" + getEndDate() +
                ", departure=" + getDeparture() +
                ", destination=" + getDestination() +
                ", selectedItems=" + selectedItems.toString() +
                "}";
    }

}