package sky.yp.dto;


import lombok.*;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SelectedTrains {
    // JSON으로 받아온 여행 정보를 저장하는 객체, 각 항목마다 배열로 값을 받아옴
    private int adultchaerge;
    private String arrplacename;
    private long arrplandtime;
    private String depplacename;
    private long depplandtime;
    private String traingradename;
    private int trainno;
    private String uniqueId;
}