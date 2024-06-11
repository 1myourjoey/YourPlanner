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
    // 여행정보를 JSON으로 받아오는 데이터 테이블
    private int userNo;             // 유저 고유번호
    private String startDate;       // 여행 시작일
    private String endDate;         // 여행 종료일
    private String departure;       // 출발 지역
    private String destination;     // 도착 지역
    private SelectedItems selectedItems;    // 선택한 여행 정보들(관광지 / 숙소 / 맛집)
    private List<SelectedTrains> selectedTrains;
    private String saveTitle;       // 플랜 제목
    @Override
    public String toString() {
        return "SavePlanRequest{" +
                "start=" + getStartDate() +
                ", end=" + getEndDate() +
                ", departure=" + getDeparture() +
                ", destination=" + getDestination() +
                ", selectedItems=" + selectedItems.toString() +
                ", selectedTrains=" + selectedTrains.toString() +
                ", title=" + getSaveTitle() +
                "}";
    }

}