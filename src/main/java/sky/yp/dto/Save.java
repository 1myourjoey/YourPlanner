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
public class Save {

     int saveNo;


     int userNo;


     String saveTitle;


     LocalDateTime firstDate;


     LocalDateTime endDate;


     String firstPlace;

    String endPlace;

    String todo;

    public Save(String todo, int saveNo) {
        this.todo = todo;
        this.saveNo = saveNo;
    }

    public int getSaveNo() {
        return saveNo;
    }
}



