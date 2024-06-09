package sky.yp.dto;

import lombok.*;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class HotelDto {
    // API에서 받아온 데이터 양식, 데이터 가공을 해서 Accommodation Entity로 값을 전달함
    private String contentid;
    private String title;
    private String addr1;
    private String contenttypeid;
    private String firstimage2;
    private String uniqueId;
}
