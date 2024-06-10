package sky.yp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Transportation {
    int transNo;
    int saveNo;
    int userNo;
    String transName;
    String firstPlace;
    String endPlace;
    LocalDateTime time;
}



